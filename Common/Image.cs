﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class Image
    {
        private int _imageId
        {
            get { return _imageId; }
            set => _imageId = Guid.NewGuid().GetHashCode();

        }
        private int _holderId { get; set; }
        private string _imageBase64 { get; set; }

        public Image(int serviceId, string imageBase64)
        {
            _imageId = Guid.NewGuid().GetHashCode();
            _holderId = serviceId;
            _imageBase64 = imageBase64;
        }

        public string ValuesToString()
        {
            return $"'{_imageId}','{_holderId}','{_imageBase64}'";
        }
    }
}
