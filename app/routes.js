angular.module('TestDemoApp').config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/videos', {
        templateUrl: 'app/views/videos/index.html',
        controller: 'VideosController'
    })
    .otherwise({redirectTo: '/videos'});
}]);
