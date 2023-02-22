using static System.Net.Mime.MediaTypeNames;
using System.Reflection;
using MitazmenServer.DB;
using System.Linq;

namespace Common
{
    [Serializable]
    public class User 
    {
        User(string firstName, string lastName, string email, string password, int phoneNumber, CommonEnum.UserType type, CommonEnum.UserStatus status, int serviceProviderId, int locationId)
        {
            _UserId = Guid.NewGuid().GetHashCode();
            _firstName = firstName;
            _lastName = lastName;
            _email = email;
            _password = password;
            _phoneNumber = phoneNumber;
            _userType = type;
            _userStatus = status;
            _locationId = locationId;
            _serviceProviderId = serviceProviderId;
        }
        User(string firstName, string email, string password, int phoneNumber, CommonEnum.UserType type)
        {
            _UserId = Guid.NewGuid().GetHashCode();
            _firstName = firstName;
            _lastName = "";
            _email = email;
            _password = password;
            _phoneNumber = phoneNumber;
            _userType = type;
        }

        private int _UserId
        {
            get { return this._UserId; }
            set => _UserId = Guid.NewGuid().GetHashCode();
        }
        private int _phoneNumber { get; set; }
        private CommonEnum.UserType _userType { get; set; }
        private CommonEnum.UserStatus _userStatus { get; set; }
        private string ? _firstName { get; set; }
        private string ? _lastName { get; set; }
        private string ? _email { get; set; }
        private string ? _password { get; set; }
        private int _serviceProviderId { get; set; }
        private int _locationId { get; set; }
        public string ValuesToString()
        {
            return $"'{this._UserId}','{this._phoneNumber}','{this._email}','{this._password}','{this._firstName}','{this._lastName}','{this._userType}','{this._userStatus}','{this._locationId}','{this._serviceProviderId}'";
        }

        public Dictionary<string, string> GetInsertQurey()
        {
            string query,parmters = "";
            Dictionary<string, string> properties = new Dictionary<string, string>();
            foreach (PropertyInfo prop in this.GetType().GetProperties())
            {
                properties.Add(prop.Name, prop?.GetValue(this)?.ToString() ?? "");
                
            }
            string str = $"INSERT INTO {this.GetType()} ('{String.Join("','", properties.Keys)}') " +
                $"VALUES ('{String.Join("','", properties.Values)}');";

            return properties;
        }
    }
}