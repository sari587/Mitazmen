using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Common.PipeStream.PipeCMDObject;

namespace Common.PipeStream
{
    public static class PipeResponseHandlers
    {
        public static CMDHandler GetHandler(PipeCMDObject.Action action)
        {
            switch (action)
            {
                case PipeCMDObject.Action.TestPipe:
                    return TestPipeAction;
                default:
                    throw new NotImplementedException($"No Implementation For Action {action}");
            }
        }

        public static bool testSucceded = false;
        public static string testFailure = "";
        private static void TestPipeAction(PipeCMDObject response)
        {
            if (response is null)
            {
                testFailure = "Received Null response";
                return;
            }
            string? dataString = response.data?.data as string;
            if (dataString is null)
            {
                testFailure = "Received Null response Data";
                return;
            }
            if (!dataString.Equals("World Hello!"))
            {
                testFailure = "String received is not correct";
                return;
            }
            testSucceded = true;
        }
    }
}
