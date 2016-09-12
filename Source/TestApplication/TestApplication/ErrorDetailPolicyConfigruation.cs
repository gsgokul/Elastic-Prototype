using System.Configuration;
using System.Web.Http;

namespace TestApplication
{
    internal class ErrorDetailPolicyConfig : ConfigurationSection
    {
        [ConfigurationProperty("policy")]
        internal IncludeErrorDetailPolicy Policy
        {
            get
            {
                return (IncludeErrorDetailPolicy)this["policy"];
            }

            set
            {
                this["policy"] = value;
            }
        }
    }
}