using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MockAPI.Entities;
using System.Net;

namespace MockAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        [HttpGet(Name = "GetUserProfile")]
        public User GetUserProfile()
        {
            return null;
        }

        [HttpGet(Name = "GetUserNotifications")]
        public IEnumerable<Notification> GetUserNotifications(string userID)
        {
            return null;
        }

        [HttpGet(Name = "GetUserAppointments")]
        public IEnumerable<Appointment> GetUserAppointments(string searchString)
        {
            return null;
        }

        [HttpGet(Name = "GetUserlocationGet")]
        public IEnumerable<LocationParams> GetUserlocationGet(string userID)
        {
            return null;
        }

        [HttpPost(Name = "PostAppointment")]
        public StatusCodeResult PostAppointment()
        {
            return Ok();
        }

        [HttpPatch(Name = "UpdateUesrLocation")]
        public StatusCodeResult UpdateUesrLocation(string userId, string Longitude, string latitude)
        {
            return Ok();
        }
    }
}
