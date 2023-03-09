using Microsoft.AspNetCore.Mvc;
using MockAPI.Entities;

namespace MockAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceProviderController : ControllerBase
    {
        [HttpGet(Name = "GetAllServices")]
        public IEnumerable<Service> GetAllServices()
        {
            return null;
        }

        [HttpGet(Name = "GetSPsAtHome")]
        public IEnumerable<Entities.ServiceProvider> GetSPsAtHome()
        {
            return null;
        }

        [HttpGet(Name = "GetSPSearchResults")]
        public IEnumerable<Entities.ServiceProvider> GetSPSearchResults(string searchString)
        {
            return null;
        }

        [HttpGet(Name = "GetMostBookedSPs")]
        public IEnumerable<Entities.ServiceProvider> GetMostBookedSPs()
        {
            return null;
        }

        [HttpGet(Name = "GetSPDetails")]
        public IEnumerable<ServiceProviderDetails> GetSPDetails(string ServiceProviderId)
        {
            return null;
        }

        [HttpGet(Name = "GetSPReviews")]
        public IEnumerable<ServiceProviderReview> GetSPReviews(string ServiceProviderId)
        {
            return null;
        }

        [HttpGet(Name = "GetSPServices")]
        public IEnumerable<Service> GetSPServices(string ServiceProviderId)
        {
            return null;
        }

        [HttpGet(Name = "GetSPAvailability")]
        public IEnumerable<Availability> GetSPAvailability(string ServiceProviderId)
        {
            return null;
        }

        [HttpGet(Name = "GetSPAvialblePayment")]
        public IEnumerable<PaymentMethod> GetSPAvialblePayment(string ServiceProviderId)
        {
            return null;
        }

        [HttpGet(Name = "GetSPsNearLocation")]
        public IEnumerable<Entities.ServiceProvider> GetSPsNearLocation(string Longitude, string latitude)
        {
            return null;
        }

        [HttpGet(Name = "GetSPLocation")]
        public IEnumerable<LocationParams> GetSPLocation(string ServiceProviderId)
        {
            return null;
        }

        [HttpPatch(Name = "UpdateSPLocation")]
        public StatusCodeResult UpdateSPLocation(string ServiceProviderI, string Longitude, string latitude)
        {
            return Ok();
        }
    }
}
