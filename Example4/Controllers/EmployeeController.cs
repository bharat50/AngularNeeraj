using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Example4.Controllers
{
    public class EmployeeController : ApiController
    {
        DataClasses1DataContext obj = new DataClasses1DataContext();
        public IEnumerable<TblEmployee> Get()
        {
            return obj.TblEmployees;
        }

        public TblEmployee GetEmployeeByName(string userName)
        {
            var data = obj.TblEmployees.FirstOrDefault((p) => p.Name.Equals(userName));
            return data;
        }
        public void PostEmployee(TblEmployee emp)
        {
            obj.TblEmployees.InsertOnSubmit(emp);
            obj.SubmitChanges();
        }
    }
}
