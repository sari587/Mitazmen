namespace Common
{
    public class Location
    {
         Location(float longitude, float latitude, int serviceProviderId, int userId, CommonEnum.UserType userType)
        {
            _locationId = Guid.NewGuid().GetHashCode();
            _longitude = longitude;
            _latitude = latitude;
            _serviceProviderId = serviceProviderId;
            _userId = userId;
            _userType = userType;
        }

        private int _locationId
        {
            get { return _locationId; }
            set => _locationId = Guid.NewGuid().GetHashCode();
        }
        private int _userId { get; set; }

        private float _longitude { get; set; }
        private float _latitude { get; set; }
        private int _serviceProviderId { get; set; }
        private CommonEnum.UserType _userType { get; set; }


        public string valuesToString()
        {
            return $"'{_locationId}','{_longitude}','{_latitude}','{_userType}','{_userId}'";
        }
    }
}