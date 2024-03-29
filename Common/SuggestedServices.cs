﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Common.CommonEnum;

namespace Common
{
    public class SuggestedServices
    {

        private int _suggestedServicesId
        {
            get { return this._suggestedServicesId; }
            set => _suggestedServicesId = Guid.NewGuid().GetHashCode();
        }
        private float _averageRate { get; set; }
        private string? _suggestedServicesDescription { get; set; }
        private CommonEnum.SuggestedServicesGroup _suggestedServicesGroup { get; set; }
        private CommonEnum.ServiceType _suggestedServiceType { get; set; }

        public SuggestedServices(float averageRate, CommonEnum.SuggestedServicesGroup suggestedServicesGroup, CommonEnum.ServiceType suggestedServiceType, string? suggestedServicesDescription)
        {
            _suggestedServicesId = Guid.NewGuid().GetHashCode();
            _averageRate = averageRate;
            _suggestedServicesGroup = suggestedServicesGroup;
            _suggestedServiceType = suggestedServiceType;
            _suggestedServicesDescription = suggestedServicesDescription;
        }

        public string ValuesToString()
        {
            return $"'{_suggestedServicesId}','{_suggestedServicesGroup}','{_suggestedServiceType}','{_suggestedServicesDescription}','{_averageRate}'";
        }
    }
}
