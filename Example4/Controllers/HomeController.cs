using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Example4.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Employee()
        {
            return View();
        }

        public ViewResult UserDetails()
        {
            return View();
            //return View("Index");
        }

        public ViewResult SearchResultOnDiffView()
        {
            return View();
        }
    }
}
