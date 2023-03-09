namespace MockAPI.Entities
{
    public class Notification
    {
        public string? NotificationID { get; set; }
        public string? userID { get; set; }
        public string? NotificationTitle { get; set; }
        public string? NotificationDetails { get; set; }
        public Service? RelatedService { get; set; }
        public Appointment? RelatedAppointment { get; set; }
        public ServiceProvider? RelatedServiceProvider { get; set; }
    }
}
