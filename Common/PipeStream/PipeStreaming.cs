using NLog;
using static Common.PipeStream.PipeCMDObject;
using System.IO.Pipes;
using static Common.PipeStream.PipeStreamSettings;
using System.Linq;
using System.Threading;

namespace Common.PipeStream
{
    public class PipeStreaming
    {

        public static readonly object lockOfLocks = new object();
        public static readonly Dictionary<string, object> _locks = new Dictionary<string, object>();
        public static readonly Logger _log = LogManager.GetCurrentClassLogger();
        public static readonly List<Thread> requestHandlersThreads = new List<Thread>();
        public static readonly List<Thread> responseHandlersThreads = new List<Thread>();
        public static readonly Dictionary<string, Thread[]> pipesListenersThreads = new Dictionary<string, Thread[]>();
        private static readonly List<int> aliveThreads = new List<int>();
        public static void StartListining(string pipeName, int threads = 4)
        {
            if (pipesListenersThreads.ContainsKey(pipeName))
            {
                _log.Warn("Trying to listen to pipe that's already has listeners...");
                return;
            }
            Thread[] listeners = new Thread[threads];
            _log.Info("Pipe Stream Started Listining...\n");
            for (int i = 0; i < threads; i++)
            {
                listeners[i] = new Thread(() => PipesConsumer(pipeName));
                aliveThreads.Add(listeners[i].ManagedThreadId);
                listeners[i].Start();
            }
            pipesListenersThreads.Add(pipeName, listeners);
        } 

        public static void StopListining(string pipeName)
        {
            if (!pipesListenersThreads.ContainsKey(pipeName))
            {
                _log.Warn("Trying to Stop Listining to pipe that's Doesn't has listeners...");
                return;
            }
            try 
            { 
                foreach(Thread t in pipesListenersThreads.GetValueOrDefault(pipeName)??throw new NullReferenceException("Failed to get Listeners threads"))
                {
                    aliveThreads.Remove(t.ManagedThreadId);
                }
                pipesListenersThreads.Remove(pipeName);
            }
            catch(Exception e)
            {
                _log.Error(e, $"Failed to Stop Listining to pipe {pipeName}");
            }
        }

        public static void SendObjectToPipe(string pipeName, PipeCMDObject data)
        {
            lock (AchieveLock(pipeName, true))
            {
                for (int i = 0; i < 10; i++)
                {
                    try
                    {
                        using (NamedPipeClientStream namedPipeClient = new NamedPipeClientStream(pipeName))
                        {
                            TryConnectToServerWithTimeOut(namedPipeClient, ConnectToServerTimeOutMS);
                            namedPipeClient.Flush();
                            while (!namedPipeClient.CanWrite) Thread.Sleep(500);
                            namedPipeClient.Write(StreamHeader);
                            namedPipeClient.Write(BitConverter.GetBytes((int)data.objectType));                            
                            byte[] messageBytes = StringEncoder(data.ToJson());
                            namedPipeClient.Write(BitConverter.GetBytes(messageBytes.Length));
                            namedPipeClient.Write(messageBytes);
                            namedPipeClient.Close();
                        }
                        break;
                    }
                    catch (Exception e)
                    {
                        _log.Error(e, $"Failed to write to pipe {pipeName}, CMDID {data.RequestId}, retrie {i}");
                        Thread.Sleep(500);
                        continue;
                    }
                }
            }
            ReleaseLock(pipeName, true);
        }

        private static void PullObjectFromPipe(string pipeName)
        {
            lock (AchieveLock(pipeName))
            {
                for (int i = 0; i < 10; i++)
                {
                    try
                    {
                        using (NamedPipeServerStream namedPipeServer = new NamedPipeServerStream(pipeName, PipeDirection.InOut, 1))
                        {
                            namedPipeServer.WaitForConnection();                           
                            while(!namedPipeServer.CanRead) Thread.Sleep(500);
                            List<byte> header = StreamHeader.ToList();
                            byte[] headerbuf = new byte[1];
                            while (header.Count>0)
                            { 
                                namedPipeServer.Read(headerbuf, 0, 1);
                                if (header[0].Equals(headerbuf[0]))
                                {
                                    header.RemoveAt(0);
                                }
                            }
                            byte[] streamTypeBuf = new byte[PipeStreamSettings.STREAMTYPEELENGTH];
                            namedPipeServer.Read(streamTypeBuf, 0, streamTypeBuf.Length);
                            int streamType = BitConverter.ToInt32(streamTypeBuf, 0);

                            byte[] streamSizeBuf = new byte[PipeStreamSettings.STREAMSIZELENGTH];
                            namedPipeServer.Read(streamSizeBuf, 0, streamSizeBuf.Length);
                            int streamSize = BitConverter.ToInt32(streamSizeBuf, 0);

                            byte[] buffer = new byte[streamSize];
                            namedPipeServer.Read(buffer, 0, streamSize);
                            string messageChunk = PipeStreamSettings.StringDecoder(buffer);

                            PipeDataHandler(messageChunk, (PipeCMDObject.StreamActionTypes)streamType);
                            namedPipeServer.Close();
                        }
                        break;
                    }
                    catch (Exception e)
                    {
                        _log.Error(e, $"Failed to pull from pipe {pipeName}, retrie {i}");
                        Thread.Sleep(500);
                        continue;
                    }
                }
            }
            ReleaseLock(pipeName);
        }

        private static void PipeDataHandler(string obj, PipeCMDObject.StreamActionTypes dataType)
        {
            switch (dataType)
            {
                case StreamActionTypes.Request:
                    PipeRequest req = (PipeRequest)PipeRequest.ConvertJsonToPipeData(obj);
                    req.InitalizeHandler();
                    Thread requestHandleThread = new Thread(() => PipeDataRequestHandler(req));
                    requestHandlersThreads.Add(requestHandleThread);
                    requestHandleThread.Start();
                    break;
                case StreamActionTypes.Response:
                    PipeResponse res = (PipeResponse)PipeResponse.ConvertJsonToPipeData(obj);
                    res.InitalizeHandler();
                    Thread responseHandleThread = new Thread(() => PipeDataResponseHandler(res));
                    responseHandlersThreads.Add(responseHandleThread);
                    responseHandleThread.Start();
                    break;
                default:
                    _log.Warn("Unknow Data Type was recevied!");
                    break;
            }
        }

        private static void PipeDataRequestHandler(PipeRequest request)
        {
            request.Handle();
            if (request.isResponeRequiered)
            {
                while(!PipeRequestHandlers.Responses.ContainsKey(request.RequestId))
                {
                    Thread.Sleep(500);
                }
                PipeResponse? response;
                PipeRequestHandlers.Responses.TryGetValue(request.RequestId, out response);
                if(response == null)
                {
                    throw new NullReferenceException($"Failed to get response for request {request.RequestId}");
                }
                SendObjectToPipe(request.responsePipe, response);
                PipeRequestHandlers.Responses.Remove(request.RequestId);
            }
        }

        private static void PipeDataResponseHandler(PipeResponse response)
        {
            response.Handle();
        }

        private static void PipesConsumer(string pipeName)
        {
            while (aliveThreads.Contains(Thread.CurrentThread.ManagedThreadId))
            {
                try
                {
                    PullObjectFromPipe(pipeName);
                }
                catch (Exception e)
                {
                    _log.Error(e, "Failed to while listining for pipe connections.");
                }
            }
        }

        private static void TryConnectToServerWithTimeOut(NamedPipeClientStream client, int timeOutMS, int intervalMS=100)
        {
            int time = 0;
            while (true)
            {
                client.Connect();
                if (client.IsConnected)
                {
                    return;
                }
                if(time >= timeOutMS)
                {
                    throw new TimeoutException($"Pipe Client Stream failed to connect to server {client.ToString}");
                }
                time += intervalMS;
                Thread.Sleep(intervalMS);
            }
        }

        private static object AchieveLock(string lockKey, bool write = false)
        {
            lockKey += write? "W": "";
            lock (lockOfLocks)
            {
                if (!_locks.ContainsKey(lockKey))
                {
                    _locks.Add(lockKey, new object());
                }
                return _locks.GetValueOrDefault(lockKey) ?? throw new NullReferenceException("Failed to achive a pipe lock");
            }
        }        
        
        private static void ReleaseLock(string lockKey, bool write = false)
        {
            lockKey += write ? "W" : "";
            lock (lockOfLocks)
            {
                _locks.Remove(lockKey);
            }
        }
    }
}