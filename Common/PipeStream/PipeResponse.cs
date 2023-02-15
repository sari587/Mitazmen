using Newtonsoft.Json;
using NLog;

namespace Common.PipeStream
{
    [Serializable]
    public class PipeResponse : PipeCMDObject
    {
        public PipeResponse(Guid requestId, PipeObjectData data, Action action) : base(requestId, data, action, StreamActionTypes.Response)
        {
            this.Handlers += PipeResponseHandlers.GetHandler(action);
        }
        public void InitalizeHandler()
        {
            Handlers += PipeResponseHandlers.GetHandler(action);
        }

        public new static PipeCMDObject ConvertJsonToPipeData(string pipeJsonStr)
        {
            PipeResponse serializedRequest = JsonConvert.DeserializeObject<PipeResponse>(pipeJsonStr) ??
                throw new JsonSerializationException($"Failed to Deserialize JSON string: {pipeJsonStr}");

            return serializedRequest;
        }

#pragma warning disable CS8618
        private PipeResponse() : base()
        {
            //ForJsonSerializer
        }
        #pragma warning restore CS8618
    }
}
