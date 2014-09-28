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

    it("should set scope.videos on instantiation", function() {
        expect(scope.videos).toBeDefined();
    });
});
