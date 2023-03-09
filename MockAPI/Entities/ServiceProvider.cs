namespace MockAPI.Entities
{
    public class ServiceProvider
    {
        public string? ServiceProviderId { get; set; }
        public User? UserAccount;
        public List<Service>? Services { get; set; }
        public List<ServiceProviderReview>? ServiceProviderReviews { get; set; }
        public ServiceProviderDetails? Details { get; set; }
        public Dictionary<int, Availability>? WeekDayAvailabilities { get; set; }
        public List<Availability>? TimeOff { get; set; }
        public List<PaymentMethod>? AcceptedPaymentMethod { get; set; }
    }
}
