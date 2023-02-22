using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Common.CommonEnum;

namespace Common
{
    public class Service
    {
        private int _serviceId
        {
            get { return this._serviceId; }
            set => _serviceId = Guid.NewGuid().GetHashCode();
        }
        private int _serviceProviderId { get; set; }
        private float _price { get; set; }
        private string? _serviceDescription { get; set; }
        private string? _serviceTimePeriod { get; set; }
        private CommonEnum.ServiceType _serviceType { get; set; }
        private CommonEnum.ServiceStatus _serviceStatus { get; set; }


        public Service(int serviceProviderId, string serviceDescription, string serviceTimePeriod, CommonEnum.ServiceType serviceType, CommonEnum.ServiceStatus serviceStatus, float price)
        {
            _serviceId = Guid.NewGuid().GetHashCode();
            _serviceProviderId = serviceProviderId;
            _serviceDescription = serviceDescription;
            _serviceTimePeriod = serviceTimePeriod;
            _price = price;
            _serviceStatus = serviceStatus;
            _serviceType = serviceType;

        }
        

        public string ValuesToString()
        {
            return $"'{_serviceId}','{_serviceDescription}','{_serviceType}','{_serviceStatus}','{_price}','{_serviceTimePeriod}','{_serviceProviderId}'";
        }
    }
}
