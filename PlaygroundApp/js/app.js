var app = angular.module('app', ['ab-base64']);

app.controller('AuthController', ['$scope', '$http', 'AuthService', function ($scope, $http, AuthService) {
    $scope.test = "wat";
    $scope.user = {};

    $scope.handleSubmit = function (user) {
        AuthService.authenticate(user).then(function (data) {
            console.log('controller response', data);
        });
    }
}]).factory('AuthService', ['$http', 'base64', function ($http, base64, user) {
    return {
        authenticate: function (user) {
            console.log(user);
            var encodedUser = base64.encode(user.username + ':' + user.password);

            $http.defaults.headers.common['Authorization'] = 'Basic ' + encodedUser;

            return $http.get('https://localhost:44300/api/stuff/getstuff?value=givemesumstuff').then(function (response) {
                console.log('user', user);
                console.log('base64', encodedUser);
                console.log('response', response);
            });
        }
    }
}]);