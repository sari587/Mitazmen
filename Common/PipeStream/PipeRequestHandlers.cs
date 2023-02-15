using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Common.PipeStream.PipeCMDObject;

namespace Common.PipeStream
{
    public static class PipeRequestHandlers
    {
        public static readonly Dictionary<Guid, PipeResponse> Responses = new Dictionary<Guid, PipeResponse>();

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
        private static void TestPipeAction(PipeCMDObject request)
        {
            if (request is null)
            {
                testFailure = "Received Null Request";
                return;
            }
            string? dataString = request.data?.data as string;
            if (dataString is null)
            {
                testFailure = "Received Null Request Data";
                return;
            }
            if(!dataString.Equals("Hello World!"))
            {
                testFailure = "String received is not correct";
                return;
            }
            string responseDataString = "World Hello!";
            PipeObjectData responseData = new PipeObjectData(responseDataString);
            PipeResponse response = new PipeResponse(request.RequestId, responseData, request.action);
            Responses.Add(request.RequestId, response);
            testSucceded = true;
        }

    }
}
