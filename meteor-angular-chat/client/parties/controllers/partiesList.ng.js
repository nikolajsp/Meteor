angular.module("socially").controller("PartiesListCtrl", function ($scope, $meteor) {
  $scope.parties = $meteor.collection(Parties);

  $scope.removeAll = function () {
    $scope.parties.remove();
  };
});