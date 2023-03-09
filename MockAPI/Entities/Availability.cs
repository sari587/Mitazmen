namespace MockAPI.Entities
{
    public class Availability
    {
        public bool Available { get; set; }
        public DateOnly? date { get; set; }
        public TimeOnly? StartAt { get; set; }
        public TimeOnly? EndAt { get; set; }
        public Service? Service { get; set; }
    }
}
