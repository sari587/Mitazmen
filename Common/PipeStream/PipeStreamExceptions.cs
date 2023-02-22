
namespace Common.PipeStream
{
    public class PipeStreamInvalidPipeObjectException : Exception
    {
        public PipeStreamInvalidPipeObjectException(string e): base(e)
        {

        }

    }
    public class JsonSerializationException : Exception
    {
        public JsonSerializationException(string e) : base(e)
        {

        }
    }
}
