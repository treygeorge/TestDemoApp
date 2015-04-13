'use strict';

angular.module('TestDemoApp').controller('FizzBuzzController', ['$scope', function($scope) {

    $scope.fizzBuzz = function(numInts) {
        var fizzBuzzOutput = '';
        for(var i=1; i<=numInts; i++) {
            if(i % 3 == 0 && i % 5 ==0){

                fizzBuzzOutput += "FizzBuzz";
            }
            else if (i % 3 == 0) {
                fizzBuzzOutput += "Fizz";
            }
            else if(i % 5 == 0)
            {
                fizzBuzzOutput += "Buzz";
            }
            else
            {
                fizzBuzzOutput += i;
            }
        }

        $scope.fizzBuzzOutput = fizzBuzzOutput;
    };

    $scope.fizzBuzz(15);
}]);
