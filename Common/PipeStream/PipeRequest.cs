using Newtonsoft.Json;
using NLog;

namespace Common.PipeStream
{
    [Serializable]
    public class PipeRequest : PipeCMDObject
    {

        public bool isResponeRequiered;
        public string responsePipe;

        private PipeRequest(PipeObjectData data, Action action, bool isResponeRequiered = false, string responsePipe = "") : base(data, action, StreamActionTypes.Request)
        {
            this.isResponeRequiered = isResponeRequiered;
            this.responsePipe = responsePipe;
        }

        public static PipeRequest InitalizeRequest(PipeObjectData data, Action action)
        {
            PipeRequest request = new PipeRequest(data, action);
            request.Handlers += PipeRequestHandlers.GetHandler(action);
            return request;
        }

        public static PipeRequest InitalizeRequest(PipeObjectData data, Action action, bool isResponeRequiered, string responsePipe)
        {
            PipeRequest request = new PipeRequest(data, action, isResponeRequiered, responsePipe);
            request.Handlers += PipeRequestHandlers.GetHandler(action);
            return request;
        }

        public void InitalizeHandler()
        {
            Handlers += PipeRequestHandlers.GetHandler(action);
        }

        public new static PipeCMDObject ConvertJsonToPipeData(string pipeJsonStr)
        {
            PipeRequest serializedRequest = JsonConvert.DeserializeObject<PipeRequest>(pipeJsonStr) ??
                throw new JsonSerializationException($"Failed to Deserialize JSON string: {pipeJsonStr}");

            return serializedRequest;
        }

#pragma warning disable CS8618
        private PipeRequest():base()
        {
            //ForJsonSerializer
        }
        #pragma warning restore CS8618

    }
}
