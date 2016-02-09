using System.Web;
using System.Web.Mvc;

namespace Example2MVC4WebExample
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}