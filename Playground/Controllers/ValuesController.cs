using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Device.Location;

namespace Playground.Controllers
{
    public class ValuesController : ApiController
    {
        public HttpResponseMessage GetDistance(double lat, double lng, double latTo, double lngTo) {

            HttpResponseMessage response = new HttpResponseMessage();
            try
            {
                GeoCoordinate loc1 = new GeoCoordinate(lat, lng);
                GeoCoordinate loc2 = new GeoCoordinate(latTo, lngTo); // Systemvej 12

                double distance = loc1.GetDistanceTo(loc2) / 1000;

                response.StatusCode = HttpStatusCode.OK;
                response.Content = new StringContent(distance.ToString());
            }
            catch (Exception ex) {
                response.StatusCode = HttpStatusCode.InternalServerError;
                response.Content = new StringContent("Duer ik!");
            }
            
            return response;
        }
    }
}