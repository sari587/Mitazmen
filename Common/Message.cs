using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class Message
    {
        private int _msgId
        {
            get { return _msgId; }
            set => _msgId = Guid.NewGuid().GetHashCode();
        }
        private int _senderId { get; set; }
        private int _receiverId { get; set; }
        private CommonEnum.msgStatus _msgStatus { get; set; }
        private string? _message { get; set; }
        private string? _msgDate { get; set; }

        Message(int senderId, int receiverId, CommonEnum.msgStatus msgStatus, string? message, string? msgDate)
        {
            _msgId = Guid.NewGuid().GetHashCode();
            _senderId = senderId;
            _receiverId = receiverId;
            _msgStatus = msgStatus;
            _message = message;
            _msgDate = msgDate;
        }

        
        public string ValuesToString()
        {
            return $"'{_msgId}','{_message}','{_msgDate}','{_msgStatus}','{_senderId}','{_receiverId}'";
        }
    }
}
