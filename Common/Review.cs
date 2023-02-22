using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class Review
    {
        private int _reviewId
        {
            get { return _reviewId; }
            set => _reviewId = Guid.NewGuid().GetHashCode();
        }
        private int _userId { get; set; }
        private int _serviceProviderId { get; set; }
        private int _serviceId { get; set; }
        private float _rating { get; set; }
        private string? _msg { get; set; }
        private string? _date { get; set; }
        private CommonEnum.ServiceType _serviceType { get; set; }

        Review(int userId, int serviceProviderId, int serviceId, float rating, string? msg, string? date, CommonEnum.ServiceType serviceType)
        {
            _reviewId = Guid.NewGuid().GetHashCode();
            _userId = userId;
            _serviceProviderId = serviceProviderId;
            _serviceId = serviceId;
            _rating = rating;
            _msg = msg;
            _date = date;
            _serviceType = serviceType;
        }

       

        public string ValuesToString()
        {
            return $"'{_reviewId}','{_msg}','{_rating}','{_date}','{_serviceType}','{_serviceProviderId}','{_userId}','{_serviceId}'";
        }
    }
}
