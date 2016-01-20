angular.module('moviesApp')
.controller('historyCtrl', function($scope, historyFactory){
  //$scope.searchTerms;
  //$scope.historyItems;

  //$scope.getItems = function (){
    $scope.searchTerms = historyFactory.getSearchTerms();
    $scope.historyItems = historyFactory.getHistoryItems();
  //};
});
