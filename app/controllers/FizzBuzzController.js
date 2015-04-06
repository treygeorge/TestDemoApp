'use strict';

angular.module('TestDemoApp').controller('FizzBuzzController', ['$scope', function($scope) {

    $scope.fizzBuzz = function(numInts) {
        $scope.fizzBuzzOutput = "";
        for (var i = 1; i <= numInts; i++) {
            var temp = '';
            temp += (i % 3) == 0 ? "Fizz" : "";
            temp += (i % 5) == 0 ? "Buzz" : "";
            $scope.fizzBuzzOutput += (!temp == "") ? temp : i;
        }

        //$scope.fizzBuzzOutput;
    };

    $scope.fizzBuzz(15);
}]);
