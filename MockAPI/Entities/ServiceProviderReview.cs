namespace MockAPI.Entities
{
    public class ServiceProviderReview
    {
        public string? ID { get; set; }
        public string? UserID { get; set; }
        public string? ServiceProviderID { get; set; }
        public Service? Service { get; set; }
        public int Rating { get; set; }
        public string? Details { get; set; }
        public DateTime Date { get; set; }
    }
}