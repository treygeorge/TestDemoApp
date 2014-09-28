'use strict';

angular.module('TestDemoApp')
    .controller('VideosController', ['$scope', function($scope) {
        $scope.videos = ['vid1', 'vid2'];
    }]);
