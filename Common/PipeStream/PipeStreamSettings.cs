using System.Security.Cryptography;
using System.Text;

namespace Common.PipeStream
{
    public class PipeStreamSettings
    {
        public static readonly byte[] StreamHeader = Encoding.UTF8.GetBytes("MSH");
        public static readonly int STREAMSIZELENGTH = 4;
        public static readonly int STREAMTYPEELENGTH = 4;
        public static readonly int StreamFileSizeBytes = 8192;
        public static readonly int ConnectToServerTimeOutMS = 10 * 1000;//10 sec
        public static byte[] StringEncoder(string str) { return Encoding.UTF8.GetBytes(str); }
        public static string StringDecoder(byte[] arr) { return Encoding.UTF8.GetString(arr); }
    }
}
