using Microsoft.AspNetCore.Components.Routing;
using Microsoft.AspNetCore.Mvc.RazorPages.Infrastructure;
using MockAPI.Entities;
using System.CodeDom.Compiler;
using ServiceProvider = MockAPI.Entities.ServiceProvider;

namespace MockAPI.Context
{
    public static class DataGenerator
    {
        public static readonly string[] Names = {"Mhemmad", "Sari", "Waked", "Abdalla", 
            "Absi", "Saleem", "Medhat", "Owen", "Dylan", "Luke", "Gabriel",
            "Anthony", "Isaac",  "Grayson", "Jack", "Julian", "Levi"};

        public static readonly string[] ServiceProviderNames = {"Masperat Alamani", "Najeeb Salon", 
        "Market alam", "Adafer Saleema", "Alham Style", "Sereen Beaty", "Sameera Salon",
        "Alma Eyes"};

        public static readonly string[] Payments = { "Pay At Store", "Visa", "Paypal" };

        public static readonly string[] ServiceTitles = {"BarberShop", "HairCut",
        "Eyes Borrow", "Nails Beaty", "Lazer", "Face Beaty"};

        

        public static readonly int[] TimesPeriodsMin = {15, 30, 45, 60, 120, 180, 360};
        public static readonly int[] Prices = {50, 70, 100, 150, 200, 500, 1000, 5000};

        public static string GenerateName()
        {
            Random rand = new Random();
            return Names[rand.Next(Names.Length)];
        }

        public static string GenerateServiceProviderName()
        {
            Random rand = new Random();
            return ServiceProviderNames[rand.Next(ServiceProviderNames.Length)];
        }
         
        public static LocationParams GenerateLocationParams()
        {
            //Latitude is specified in degrees within the range[-90, 90].
            //Longitude is specified in degrees within the range[-180, 180).
            Random rand = new Random();
            LocationParams location = new LocationParams();
            location.Latitude = rand.Next(180) - 90;
            location.Longitude = rand.Next(360) - 180;
            return location;
        }

        public static User GenerateUser(bool isProvider =  false)
        {
            //Latitude is specified in degrees within the range[-90, 90].
            //Longitude is specified in degrees within the range[-180, 180).
            Random rand = new Random();
            User user = new User();
            user.FirstName = GenerateName();
            user.LastName = GenerateName();
            user.Username = user.FirstName + rand.Next(9999);
            user.Email = user.Username + "@gmail.com";
            user.PhoneNumber = "05" + rand.Next(99999999);
            user.IsServiceProvider = isProvider;
            return user;
        }

        public static Service GenerateService(string? serviceTitle = null)
        {
            //Latitude is specified in degrees within the range[-90, 90].
            //Longitude is specified in degrees within the range[-180, 180).
            Random rand = new Random();
            Service service = new Service();
            service.ServiceId = Guid.NewGuid().ToString();
            service.ServiceTitle = serviceTitle??ServiceTitles[rand.Next(ServiceTitles.Length)];
            service.Price = Prices[rand.Next(Prices.Length)];
            service.ServiceDescription = "Bla Bla bla bla.....";
            service.ServiceTimePeriodMin = TimesPeriodsMin[rand.Next(TimesPeriodsMin.Length)];
            return service;
        }
        
        public static ServiceProviderReview GenerateSPReview(ServiceProvider? sp = null, Service? service = null)
        {
            //Latitude is specified in degrees within the range[-90, 90].
            //Longitude is specified in degrees within the range[-180, 180).
            Random rand = new Random();
            ServiceProviderReview review = new ServiceProviderReview();
            review.ID = Guid.NewGuid().ToString();
            review.UserID = GenerateUser().Username;
            review.ServiceProviderID = sp?.ServiceProviderId ?? GetServiceProvider()?.ServiceProviderId;
            review.Service = service ?? GenerateService();
            review.Date = DateTime.Now.AddDays(-rand.Next(780));
            review.Rating = rand.Next(10);
            review.Details = $"Good Job, you got {review.Rating}...";
            return review;
        }        

        public static ServiceProvider GetServiceProvider()
        {
            Random rand = new Random();
            ServiceProvider sp = new ServiceProvider();
            sp.ServiceProviderId = Guid.NewGuid().ToString();
            sp.UserAccount = GenerateUser(true);
            sp.Services = new List<Service>();
            int servicesCount = rand.Next(5);
            int servicesIndex = rand.Next(ServiceTitles.Length - servicesCount);
            for(int i = 0; i <= servicesCount; i++)
            {
                sp.Services.Add(GenerateService(ServiceTitles[servicesIndex]));
            }
            sp.ServiceProviderReviews = new List<ServiceProviderReview>();
            int reviewsCount = rand.Next(25);
            for (int i = 0; i <= servicesCount; i++)
            {
                sp.ServiceProviderReviews.Add(GenerateSPReview(sp, sp.Services[rand.Next(servicesCount)]));
            }

            sp.Details = new ServiceProviderDetails { Description = "Where are good Service Provider, try us" };
            sp.WeekDayAvailabilities = new Dictionary<int, Availability>();
            TimeOnly EightAM= TimeOnly.Parse("08:00");
            TimeOnly TwoPM= TimeOnly.Parse("14:00");
            TimeOnly FourPM= TimeOnly.Parse("16:00");
            TimeOnly SixPM= TimeOnly.Parse("18:00");
            TimeOnly DayStart = TimeOnly.Parse("00:00");
            TimeOnly DayEnd = TimeOnly.Parse("23:59");
            Availability av1 = new Availability() { Available = true, StartAt = EightAM, EndAt = FourPM };
            Availability av2 = new Availability() { Available = true, StartAt = TwoPM, EndAt = SixPM };
            Availability offDay = new Availability() { Available = false};
            sp.WeekDayAvailabilities.Add(1, av1);
            sp.WeekDayAvailabilities.Add(2, av2);
            sp.WeekDayAvailabilities.Add(3, av1);
            sp.WeekDayAvailabilities.Add(4, av1);
            sp.WeekDayAvailabilities.Add(5, av2);
            sp.WeekDayAvailabilities.Add(6, offDay);
            sp.WeekDayAvailabilities.Add(7, offDay);

            Availability holiday1 = new Availability { Available = false, date = DateOnly.FromDateTime(DateTime.Now.AddDays(7)), 
                StartAt = DayStart, EndAt = DayEnd };
            Availability holiday2 = new Availability { Available = false, date = DateOnly.FromDateTime(DateTime.Now.AddDays(10)), 
                StartAt = DayStart, EndAt = DayEnd };

            sp.TimeOff = new List<Availability>()
            {
                holiday1,
                holiday2
            };

            sp.AcceptedPaymentMethod = new List<PaymentMethod>
            {
                new PaymentMethod { PaymentType = Payments[rand.Next(Payments.Length)] }
            };

            return sp;
        }

        public static Appointment GenerateAppointments(User? user = null, ServiceProvider? serviceProvider = null, Service? service =null)
        {
            Appointment appointment = new Appointment();
            appointment.AppointmentID = Guid.NewGuid().ToString();

            TimeOnly start = TimeOnly.Parse("09:00");
            TimeOnly end = TimeOnly.Parse("10:00");
            appointment.Date = DateOnly.FromDateTime(DateTime.Now.AddDays(1));
            appointment.StartAt = start;
            appointment.EndAt = end;

            appointment.UserID = user?.Username ?? "";
            appointment.ServiceProvider = serviceProvider ?? GetServiceProvider();
            appointment.Service = service ?? serviceProvider?.Services?[0] ?? GenerateService();

            return appointment;
        }
    }
}
