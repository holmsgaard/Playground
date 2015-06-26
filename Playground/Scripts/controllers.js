var locApp = angular.module('locApp', []);

locApp.controller('HomeController', function ($scope, locationService) {
    $scope.wat = ['1'];
    console.log($scope.wat);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else {
        $scope.position = null;
    }

    function showPosition(position) {
        console.log('position', position);
        $scope.position = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
    }

    $scope.lat = 57.070025;
    $scope.lng = 9.545024;

    $scope.showPosition = function (position) {
        console.log('position', position);
        $scope.position = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
    }

    $scope.getDistance = function () {
        console.log(
            $scope.position,
            [$scope.lat, $scope.lng]
        );

        
        if ($scope.position != null) {
            locationService.getDistance($scope.lat, $scope.lng, $scope.position.lat, $scope.position.lng).then(function (response) {
                $scope.distance = response.data;
            });
        }
        else {
            alert('Ingen position');
        }

    }

    

}).service('locationService', function ($http) {
    var locationService = {
        getDistance: function (lat, lng, latTo, lngTo) {
            var promise = $http.get('/api/values/GetDistance?lat=' + lat + '&lng=' + lng + '&latTo=' + latTo + '&lngTo=' + lngTo).then(function (response) {
                console.log(response);
                return response;
            });
            return promise;
        }
    }
    return locationService;
});