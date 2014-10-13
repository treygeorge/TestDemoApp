'use strict';

describe('TextSearchController', function() {
    var scope, controller;

    beforeEach(function() {
        module('TestDemoApp');
    });

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();

        controller = $controller('TextSearchController', {
            '$scope': scope
        });
    }));

    /*it("should find 2 occurances of uh in the article", function() {
        scope.search = 'uh';
        expect(scope.occurances == 2);
    });

    it("should find 17 occurances of uh in the article", function() {
        scope.search = 'the';
        expect(scope.occurances == 17);
    });

    it("should find 6 occurances of uh in the article", function() {
        scope.search = 'constituent';
        expect(scope.occurances == 6);
    });*/
});
