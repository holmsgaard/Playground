using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Playground.Models;

namespace Playground.Controllers
{
    public class AuthenticationController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage Auth(String credentials) {


            return Request.CreateResponse(HttpStatusCode.OK, "Authenticated");
        }

        public HttpResponseMessage Authenticate(AuthenticateViewModel viewModel) {
            if (AuthenticateUserService(viewModel))
            {
                return Request.CreateResponse(HttpStatusCode.OK, "Got access");
            }
            else {
                return Request.CreateResponse(HttpStatusCode.OK, "User code or password is incorrect");
            }

            
            //try
            //{
            //    return Request.CreateResponse(HttpStatusCode.OK, "Yes" + token);
            //    //return Request.CreateResponse(HttpStatusCode.OK, repository.GetEventLog(), "application/json");
            //}
            //catch (Exception e)
            //{
            //    return Request.CreateResponse(HttpStatusCode.InternalServerError, (object)null, "application/json");
            //}
        }

        public bool AuthenticateUserService(AuthenticateViewModel user) {
            if ((user.Username == "test" && user.Password == "test")) {
                return true;
            }
            return false;
        }
    }
}
