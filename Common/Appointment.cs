using Microsoft.VisualBasic;
using MitazmenServer.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class Appointment
    {
        Appointment(int userId, int serviceProviderId, int serviceId, string? dateOfBirth, string? dateOfAppointment, string? appointmentDescreption, CommonEnum.AppointmentStatus appointmentStatus, CommonEnum.ServiceType appointmentServiceType)
        {
            _appointmentId = Guid.NewGuid().GetHashCode();
            _userId = userId;
            _serviceProviderId = serviceProviderId;
            _serviceId = serviceId;
            _dateOfBirth = dateOfBirth;
            _dateOfAppointment = dateOfAppointment;
            _appointmentDescreption = appointmentDescreption;
            _appointmentStatus = appointmentStatus;
            _appointmentServiceType = appointmentServiceType;
        }

        private int _appointmentId
        {
            get { return _appointmentId; }
            set => _appointmentId = Guid.NewGuid().GetHashCode();
        }
        private int _userId { get; set; }
        private int _serviceProviderId { get; set; }
        private int _serviceId { get; set; }
        private string? _dateOfBirth { get; set; }
        private string? _dateOfAppointment { get; set; }
        private string? _appointmentDescreption { get; set; }
        private CommonEnum.AppointmentStatus _appointmentStatus { get; set; }
        private CommonEnum.ServiceType _appointmentServiceType { get; set; }
        public string valuesToString()
        {
            return $"'{_appointmentId}','{_appointmentDescreption}','{_dateOfAppointment}','{_appointmentServiceType}','{_appointmentStatus}','{_serviceProviderId}','{_serviceId}','{_userId}'";
        }

    }
}
