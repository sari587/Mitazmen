using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class CommonEnum
    {
        public enum ServiceStatus
        {
            Done,
            Scheduled
        }
        public enum SuggestedServicesGroup
        {
            None,
            Barbershop,
            Salon
        }
        public enum msgStatus
        {
            Queued,
            Sent,
            Failed,
            Delivered,
            Deleted
        }
        public enum AppointmentStatus
        {
            Pending,
            Arrived,
            Cancelled,
            Done
        }
        public enum ServiceType
        {
            HairCut,
            BeardShave,
            NailCare
        }
        public enum ServiceProviderStatus
        {
            Open,
            Closed,
            OutOfOrder
        }

        public enum ServiceProviderType
        {
            None,
            Barbershop,
            Salon
        }
        public enum UserType
        {
            Customer,
            ServiceOwner
        }
        public enum UserStatus
        {
            loggedIn,
            loggedOut,
            Suspended
        }
    }
}
