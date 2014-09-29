'use strict';

angular.module('TestDemoApp').controller('VideosController', ['$scope', '$http', function($scope, $http) {

    $http.get('/data/videos.json')
        .success(function(data) {
            $scope.videos = data;
        });
}]);
