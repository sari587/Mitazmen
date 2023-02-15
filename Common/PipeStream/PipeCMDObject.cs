using Newtonsoft.Json;
using NLog;

namespace Common.PipeStream
{
    public abstract class PipeCMDObject
    {
        public Guid RequestId { get; private set; }
        public PipeObjectData data;
        public delegate void CMDHandler(PipeCMDObject request);        

        public event CMDHandler Handlers;
        private static readonly Logger _log = LogManager.GetCurrentClassLogger();

        public StreamActionTypes objectType;
        public Action action;

        public enum StreamActionTypes
        {
            Request,
            Response
        }

        public enum Action
        {
            TestPipe
        }

        protected PipeCMDObject(PipeObjectData data, Action action, StreamActionTypes objectType)
        {
            RequestId = Guid.NewGuid();
            this.data = data;
            Handlers += (data) => _log.Info($"Handling New Pipe request: {data}");
            this.objectType = objectType;
            this.action = action;
        }

        protected PipeCMDObject(Guid requestId, PipeObjectData data, Action action, StreamActionTypes objectType)
        {
            RequestId = requestId;
            this.data = data;
            Handlers += (data) => _log.Info($"Handling New Pipe request: {data}");
            this.objectType = objectType;
            this.action = action;
        }

        public static PipeCMDObject ConvertJsonToPipeData(string pipeJsonStr)
        {
            PipeCMDObject serializedRequest = JsonConvert.DeserializeObject<PipeCMDObject>(pipeJsonStr) ??
                throw new JsonSerializationException($"Failed to Deserialize JSON string: {pipeJsonStr}");

            return serializedRequest;
        }

        public string ToJson()
        {
            return JsonConvert.SerializeObject(this);
        }

        public void Handle()
        {
            Handlers?.Invoke(this);
        }

        #pragma warning disable CS8618 
        protected PipeCMDObject()
        {
            //For Json Serializer
        }
        #pragma warning restore CS8618

    }
}
