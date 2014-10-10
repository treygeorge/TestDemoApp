'use strict';

angular.module('TestDemoApp').config(['$routeProvider', function($routeProvider) {

    $routeProvider
    .when('/', {
        templateUrl: 'app/views/index.html'
    })
    .when('/videos', {
        templateUrl: 'app/views/videos/index.html',
        controller: 'VideosController'
    })
    .when('/textSearch', {
        templateUrl: 'app/views/text-search/index.html',
        controller: 'TextSearchController'
    })
    .otherwise({redirectTo: '/'});

}]);
