using NLog;

namespace MitazmenServer
{
    public class MainService : BackgroundService
    {
        private readonly ILogger<MainService> _logger;
        private static readonly Logger _log = LogManager.GetCurrentClassLogger();

        public MainService(ILogger<MainService> logger)
        {
            _logger = logger;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);
                await Task.Delay(1000, stoppingToken);
            }
        }
    }
}