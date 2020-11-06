using System;
using System.Collections.Generic;
using System.Text;

namespace Roomates.Models.SettingsModels
{
    public class JwtSettings
    {
        public string Secret { get; set; }
        public int ExpireDays { get; set; }
    }
}
