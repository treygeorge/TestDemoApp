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

    it("should find 2 occurrences of 'uh' in the article", function() {
         scope.search = 'uh';

         scope.textChange();

         expect(scope.occurrences).toEqual(2);
    });

    it("should find 17 occurrences of 'the' in the article", function() {
         scope.search = 'the';

         scope.textChange();

         expect(scope.occurrences).toEqual(17);
    });

    it("should find 6 occurrences of 'constituent' in the article", function() {
         scope.search = 'constituent';

         scope.textChange();

         expect(scope.occurrences == 6);
    });
});
