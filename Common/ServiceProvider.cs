using static Common.CommonEnum;

namespace Common
{
    public class ServiceProvider
    {
        ServiceProvider(int ownerId, int serviceProviderPhone, string serviceProviderDescription, float rating, CommonEnum.ServiceProviderType type, CommonEnum.ServiceProviderStatus status, int workingHourId, int locationId)
        {
            _serviceProviderId = Guid.NewGuid().GetHashCode();
            _ownerId = ownerId;
            _serviceProviderPhone = serviceProviderPhone;
            _serviceProviderDescription = serviceProviderDescription;
            _serviceProviderRating = rating;
            _serviceProviderType = type;
            _serviceProviderStatus = status;
            _workingHourId = workingHourId;
            _serviceProviderLocationId = locationId;
        }

        private int _serviceProviderId
        {
            get { return this._serviceProviderId; }
            set => _serviceProviderId = Guid.NewGuid().GetHashCode();
        }
        private int _ownerId { get; set; }
        private int _serviceProviderPhone { get; set; }
        private int _workingHourId { get; set; }
        private int _serviceProviderLocationId { get; set; }
        private float _serviceProviderRating { get; set; }
        private CommonEnum.ServiceProviderType _serviceProviderType { get; set; }
        private CommonEnum.ServiceProviderStatus _serviceProviderStatus { get; set; }
        private string? _serviceProviderDescription { get; set; }

        public string valuesToString()
        {
            return $"'{_serviceProviderId}','{_serviceProviderDescription}','{_serviceProviderType}','{_serviceProviderRating}','{_serviceProviderStatus}','{_serviceProviderPhone}','{_workingHourId}','{_serviceProviderLocationId}','{_ownerId}'";
        }

    }
}
