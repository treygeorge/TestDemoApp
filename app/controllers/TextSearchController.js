'use strict';

angular.module('TestDemoApp').controller('TextSearchController', ['$scope', function($scope) {

  // Count the number of occurrences the text in the box appears.
  $scope.textChange = function() {
       //$scope.search;
    //   $scope.searchText;
      var r = new RegExp($scope.search, "gi");
      var matches = $scope.searchText.match(r);
      console.log('matches', matches);

       $scope.occurrences = matches.length;
  };

  $scope.searchText = "Speakers often repeat the first word of major constituents, as in, “I uh I wouldn't be surprised at that.” Repeats like this divide into four stages: an initial commitment to the constituent (with “I”); the suspension of speech; a hiatus in speaking (filled with “uh”); and a restart of the constituent (“I wouldn't . . .”). An analysis of all repeated articles and pronouns in two large corpora of spontaneous speech shows that the four stages reflect different principles. Speakers are more likely to make a premature commitment, immediately suspending their speech, as both the local constituent and the constituent containing it become more complex. They plan some of these suspensions from the start as preliminary commitments to what they are about to say. And they are more likely to restart a constituent the more their stopping has disrupted its delivery. We argue that the principles governing these stages are general and not specific to repeats.";
}]);
