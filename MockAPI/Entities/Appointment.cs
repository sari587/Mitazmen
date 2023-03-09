namespace MockAPI.Entities
{
    public class Appointment
    {
        public string? AppointmentID { get; set; }
        public string? UserID { get; set; }
        public DateOnly Date { get; set; }
        public TimeOnly StartAt { get; set; }
        public TimeOnly EndAt { get; set; }
        public Service? Service { get; set; }
        public ServiceProvider? ServiceProvider { get; set; }
    }
}
