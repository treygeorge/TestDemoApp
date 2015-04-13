'use strict';

describe("FizzBuzzController", function() {
    var controller, scope;

    beforeEach(function() {
        module('TestDemoApp');
    });

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();

        controller = $controller('FizzBuzzController', {
            '$scope': scope
        });
    }));

    describe("$scope.fizzBuzz", function() {

        it("should have the correct string for 15 integers", function() {

             scope.fizzBuzz(15);

             expect(scope.fizzBuzzOutput).toEqual('12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz');
        });

        it("should have the correct string for 30 integers", function() {

             scope.fizzBuzz(30);

             expect(scope.fizzBuzzOutput).toEqual('12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz1617Fizz19BuzzFizz2223FizzBuzz26Fizz2829FizzBuzz');
        });
    });
});
