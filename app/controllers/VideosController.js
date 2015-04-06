'use strict';

angular.module('TestDemoApp').controller('VideosController', ['$scope', '$http', 'USER_TOKEN', function($scope, $http, USER_TOKEN) {

    $http.defaults.headers.common.Authorization = 'bearer ' + USER_TOKEN;

    $http.get('https://api.vimeo.com/groups/275943/videos?page=1&per_page=50')
    .then(function(response) {
        console.log('videos for group 275943', response);


        $scope.videos = response.data.data;
    });

    $scope.clicked = function() {
        console.log('clicked');
        var e = angular.element(document.getElementsByClassName('.hidden'));
        e.toggleClass('.hidden');
    };

}]);
