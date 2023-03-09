namespace MockAPI.Entities
{
    public class User
    {
        public string? Username { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public bool IsServiceProvider { get; set; }
        public List<Appointment>? Appointements { get; set; }
        public List<Notification>? Notifications { get; set; }
    }
}