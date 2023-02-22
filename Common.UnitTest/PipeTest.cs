using Common.PipeStream;

namespace Common.UnitTest
{
    [TestClass]
    public class PipeTest
    {
        [TestMethod]
        public void TestPipeHandling()
        {
            string data = "Hello World!";
            string pipeName = "MitazmenTestingPipe";
            string ResponsePipeName = "MitazmenTestingPipeResponse";
            PipeObjectData pipeData = new PipeObjectData(data);
            PipeRequest pipeCMD = PipeRequest.InitalizeRequest(pipeData, PipeRequest.Action.TestPipe, true, ResponsePipeName);
            PipeStreaming.StartListining(pipeName);
            PipeStreaming.StartListining(ResponsePipeName);
            PipeStreaming.SendObjectToPipe(pipeName, pipeCMD);
            for(int i=0; i<20 && !PipeRequestHandlers.testSucceded; i++) 
            {
                Thread.Sleep(200);
            }
            for (int i = 0; i < 20 && !PipeResponseHandlers.testSucceded; i++)
            {
                Thread.Sleep(200);
            }
            PipeStreaming.StopListining(pipeName);
            if (!PipeRequestHandlers.testSucceded)
            {
                Assert.Fail(PipeRequestHandlers.testFailure);
            }
            if (!PipeResponseHandlers.testSucceded)
            {
                Assert.Fail(PipeResponseHandlers.testFailure);
            }
            Assert.IsTrue(PipeRequestHandlers.testSucceded);
            Assert.IsTrue(PipeResponseHandlers.testSucceded);
        }
    }
}