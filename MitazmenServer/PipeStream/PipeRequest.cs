using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.Eventing.Reader;

namespace PipeStream
{
    [Serializable]
    public class PipeRequest
    {
        public Guid RequestId { get; private set; }
        
        public Action action;
        public IPipeRequestData data;
        public enum Action
        {
            GetAllJobs,
            GetJobByID,
            GetActiveJobs
        }

        protected PipeRequest(IPipeRequestData data)
        {
            RequestId = Guid.NewGuid();
            this.data = data;
        }

        public static PipeRequest ConvertJsonToPipeData(string pipeJsonStr)
        {

            PipeRequest serializedRequest = JsonConvert.DeserializeObject<PipeRequest>(pipeJsonStr) ?? 
                throw new JsonSerializationException($"Failed to Deserialize JSON string: {pipeJsonStr}");
            
            return serializedRequest;
        }

    }
    public class JsonSerializationException : Exception
    {
        public JsonSerializationException(string e) : base(e)
        {

        }
    }
}
