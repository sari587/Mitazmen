using MitazmenServer;

IHost host = Host.CreateDefaultBuilder(args)
    .ConfigureServices(services =>
    {
        services.AddHostedService<MainService>();
    })
    .Build();

await host.RunAsync();
