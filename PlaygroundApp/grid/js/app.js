console.log('grid app.js loaded');
var app = angular.module('app', []);

app.controller('ProductsController', ['$scope', '$http', 'ProductsService', function ($scope, $http, ProductsService) {
    $scope.tags = [
        {
            name: "gmp",
            active: true 
        },
        {
            name: "cater",
            active: false
        },
        {
            name: "inspiration"
        }
    ];
    
    $scope.toggleTag = function (index) {
        var tag = $scope.tags[index];
        if (tag.active) {
            tag.active = false;
        }
        else {
            tag.active = true;
        }
        console.log($scope.tags);
    }

    $scope.products = [
            {
                "name": "Catershare",
                "description": "Prøv catershare og oplev inspiration fra alle vores leverandører",
                "img": "http://staging.abcatering.dk/media/2439/catershare_ikon.jpg",
                "reference": "",
                "isProduct": true,
                "tags": [
                    "frost",
                    "offers"
                ],
                "tag": "offers"
            },
            {
                "name": "Green Menu Planner",
                "description": "Green Menu Planner - din vej til en sundere hverdag!",
                "img": "http://staging.abcatering.dk/media/2547/gmp_oplev.jpg",
                "reference": "",
                "isProduct": true,
                "tags": [
                    "frost",
                    "offers",
                    "gmp"
                ],
                "tag": "gmp"
            },
            {
                "name": "SPOT",
                "description": null,
                "img": "http://staging.abcatering.dk/media/2522/event_spot.jpg",
                "reference": "",
                "isProduct": true,
                "tags": [
                    "frost",
                    "offers",
                    "spot"
                ],
                "tag": "inspiration"
            },
            {
                "name": "SPOT",
                "description": "Philadelphia lancerer en helt ny ostesmag.",
                "img": "http://staging.abcatering.dk/media/2542/spot_mondelez_bc_maj2015_1-1.jpg",
                "reference": "",
                "isProduct": true,
                "tags": [
                    "frost",
                    "offers",
                    "spot"
                ]
            },
            {
                "name": "Billede",
                "description": null,
                "img": "http://foodinfo.cater.dk/foodimages/2259.jpg",
                "reference": "",
                "isProduct": true,
                "tags": [
                    "frost",
                    "offers",
                    "spot"
                ]
            }
    ];

    //ProductsService.getProducts().then(function (response) {
    //    $scope.products = response.data.products;
    //});

}]).filter('selectedTags', function () {
    return function (products, tags) {
        return products.filter(function (product) {
            function hasActiveFilter() {
                for (var i = 0; i < tags.length; i++) {
                    if (tags[i].active === true) return true;
                }
                return false;
            }
            
            if (hasActiveFilter()) {
                for (var i = 0; i < tags.length; i++) {
                    if (tags[i].name == product.tag && tags[i].active) {
                        return true;
                    }
                }

                if (tags.indexOf(product.tag) != -1) {
                    return true;
                }

                return false;
            }
            else {
                return true;
            }
        });
    };
}).factory('ProductsService', ['$http', function ($http) {
    return {
        getProducts: function () {
            var promise = $http.get('/data/products.json').then(function (response) {
                return response;
            });

            return promise;
        }
    };
}]);

