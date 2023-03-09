using Microsoft.AspNetCore.Mvc;
using MitazmenREST.Entities;

namespace MitazmenREST.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private static List<User> currentUsers = new List<User>();

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "Users")]
        public IEnumerable<User> Get()
        {
            return currentUsers;
        }

        [HttpPut(Name = "AddUser")]
        public StatusCodeResult AddUser(string username)
        {
            currentUsers.Add(new User() { userId = currentUsers.Count, username = username });
            return Ok();
        }

        [HttpDelete(Name = "DeleteUser")]
        public StatusCodeResult DeleteUser(int userId)
        {
            currentUsers.RemoveAt(userId);
            return Ok();
        }

        [HttpPatch(Name = "UpdateUser")]
        public StatusCodeResult UpdateUser(int userId, string username)
        {
            currentUsers[userId].username = username;
            return Ok();
        }
    }
}