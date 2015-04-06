'use strict';

describe('VideosController', function() {
    var scope, controller;

    beforeEach(function() {
        module('TestDemoApp');
    });

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();

        controller = $controller('VideosController', {
            '$scope': scope
        });
    }));

    it("should set scope.videos on instantiation", inject(function($httpBackend) {
         $httpBackend.expectGET('https://api.vimeo.com/groups/275943/videos?page=1&per_page=50').respond([{}]);

         $httpBackend.flush();

         expect(scope.videos).toBeDefined();
    }));
});
