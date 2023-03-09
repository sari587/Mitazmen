using MockAPI.Entities;
using ServiceProvider = MockAPI.Entities.ServiceProvider;

namespace MockAPI.Context
{
    public class StaticMockData
    {
        public List<Service>? Services;
        public List<ServiceProvider>? ServiceProviders;
        public List<User>? Users;
        public Dictionary<string, Appointment>? usersAppointments;
        public Dictionary<string, Notification>? usersNotifications;

        public StaticMockData InitlaizeRandomData(int sServicesScale = 10, int serviceProvidersScale = 100, int usersScale = 1000)
        {
            
            Service service = new Service();
            return null;
        }
    }
}
