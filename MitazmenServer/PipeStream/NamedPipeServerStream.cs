using MitazmenServer.PipeStream;
using Newtonsoft.Json;
using NLog;
using System.IO.Pipes;
using System.Text;

namespace PipeStream
{
    public class PipeServer
    {
        private static int numThreads = 4;
        private static readonly Logger _log = LogManager.GetCurrentClassLogger();
        private static object MitazmenRESTPipeLock = new object();
        private static readonly byte[] StreamHeader = Encoding.UTF8.GetBytes("MitazmenServerHeader");
        private static readonly int STREAMSIZELENGTH = 4;
        private static readonly int StreamFileSizeBytes = 8192 ;

        public static void StartListining()
        {
            int i;
            Thread[] servers = new Thread[numThreads];

            _log.Info("Pipe Stream Started Listining...\n");
            for (i = 0; i < numThreads; i++)
            {
                servers[i] = new Thread(PipesConsumer);
                servers[i].Start();
            }
        }


        private static void PipesConsumer()
        {
            while (true)
            {
                try
                {
                    ReceiveObjectFromClient();
                }
                catch (Exception e)
                {
                    _log.Error(e, "Failed to while listining for pipe connections.");
                }
            }
        }

        private static void SendObjectToClient()
        {

        }

        private static void ReceiveObjectFromClient()
        {
            lock (MitazmenRESTPipeLock)
            {
                using (NamedPipeServerStream namedPipeServer = new NamedPipeServerStream("MitazmenRESTPipe", PipeDirection.InOut,1))
                {
                    namedPipeServer.WaitForConnection();
                    byte[] header = new byte[StreamHeader.Length];
                    namedPipeServer.Read(header, 0, header.Length);
                    if (!header.SequenceEqual(StreamHeader))
                    {
                        throw new PipeStreamInvalidPipeObjectException("Invalid Bytes Header recived in pipe stream reader");
                    }
                    byte[] streamSize = new byte[STREAMSIZELENGTH];
                    namedPipeServer.Read(streamSize, 0, streamSize.Length);
                    int streamSizeInt = BitConverter.ToInt32(streamSize, 0);
                    byte[] buffer = new byte[streamSizeInt];
                    namedPipeServer.Read(buffer, 0, streamSizeInt);
                    string messageChunk = Encoding.UTF8.GetString(buffer);

                    PipeRequest req = PipeRequest.ConvertJsonToPipeData(messageChunk);
                    Thread reqHandlerThread = new Thread(() => PipeRequestHandler(req));
                    reqHandlerThread.Start();
                }
            }

        }

        private static void PipeRequestHandler(PipeRequest req)
        {

        }
    }
}