using MitazmenServer;

IHost host = Host.CreateDefaultBuilder(args)
    .ConfigureServices(services =>
    {
        services.AddHostedService<Worker>();
        services.AddHostedService<Worker2>();
    })
    .Build();

await host.RunAsync();
