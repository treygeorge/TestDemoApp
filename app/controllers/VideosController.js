'use strict';

angular.module('TestDemoApp').controller('VideosController', ['$scope', '$http', 'USER_TOKEN', function($scope, $http, USER_TOKEN) {

    $http.defaults.headers.common.Authorization = 'bearer ' + USER_TOKEN;

    $http.get('https://api.vimeo.com/groups/275943/videos?page=1&per_page=50')
    .success(function(data) {
        console.log('videos for group 275943', data);
    });
    
}]);
