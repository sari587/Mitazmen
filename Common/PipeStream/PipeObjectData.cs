
using Newtonsoft.Json;

namespace Common.PipeStream
{
    public class PipeObjectData
    {
        public readonly object? data;
        public readonly string? jsonData;
        public readonly DataType dataType;
        public enum DataType
        {
            String,
            Customer
        }

        public PipeObjectData(string data) //Every new type should be in new constructor
        {
            this.data = data;
            jsonData = JsonConvert.SerializeObject(data);
            this.dataType = DataType.String;
        }

    }
}
