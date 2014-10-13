'use strict';

describe("Routes", function () {
    var appModule;

    beforeEach(module('ngRoute'));

    beforeEach(function () {
       appModule = module('TestDemoApp');
    });

    it("should request views/index.html for base route", inject(function($rootScope, $route, $location, $httpBackend) {
        $httpBackend.expectGET('app/views/index.html').respond('Main view');

        $location.path('/');
        $rootScope.$digest();
        $httpBackend.flush();

        verifyNothingOutstanding($httpBackend);
    }));

    it("should request views/videos/index.html for /videos route", inject(function($rootScope, $route, $location, $httpBackend) {
        $httpBackend.expectGET('app/views/videos/index.html').respond('Videos view');

        $location.path('/videos');
        $rootScope.$digest();
        $httpBackend.flush();

        verifyNothingOutstanding($httpBackend);
    }));

    it("should request views/fizz-buzz/index.html for /fizzbuzz route", inject(function($rootScope, $route, $location, $httpBackend) {
        $httpBackend.expectGET('app/views/fizz-buzz/index.html').respond('FizzBuzz view');

        $location.path('/fizzbuzz');
        $rootScope.$digest();
        $httpBackend.flush();

        verifyNothingOutstanding($httpBackend);
    }));
});

function verifyNothingOutstanding($httpBackend) {
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
}
