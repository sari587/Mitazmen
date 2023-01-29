using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MitazmenServer.PipeStream
{
    public class PipeStreamInvalidPipeObjectException : Exception
    {
        public PipeStreamInvalidPipeObjectException(string e): base(e)
        {

        }
    }
}
