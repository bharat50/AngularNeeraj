using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Example4
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{userName}",//replaced id with userName
                defaults: new { userName = RouteParameter.Optional } //replaced id with userName
            );
        }
    }
}
