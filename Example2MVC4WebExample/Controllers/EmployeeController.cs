using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Example2MVC4WebExample.Controllers
{
    public class EmployeeController : ApiController
    {
        DataClasses1DataContext objDataContext = new DataClasses1DataContext();
        //GET api/employee
        public IEnumerable<tblEmp> Get()
        {
            return objDataContext.tblEmps;
        }

        //GET api/employee/1
        public tblEmp GetByEmployeeId(int id)
        {
            var employee = objDataContext.tblEmps.FirstOrDefault((p) => p.Id.Equals(id));
            return employee;
        }

        //POST api/employee
        public void PostEmployee(tblEmp Employee)
        {
            objDataContext.tblEmps.InsertOnSubmit(Employee);
            objDataContext.SubmitChanges();
        }
    }

}
