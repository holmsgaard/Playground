using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Playground.Models;

namespace Playground.Controllers
{
    public class StuffController : ApiController
    {
        [Authorize]
        [HttpGet]
        public HttpResponseMessage GetStuff(String value)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, "Yes" + value);
                //return Request.CreateResponse(HttpStatusCode.OK, repository.GetEventLog(), "application/json");
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, (object)null, "application/json");
            }
        }
    }
}
