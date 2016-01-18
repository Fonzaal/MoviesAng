/**
 * @ngdoc overview
 * @name detailsCtrl
 * @description
 *
 */
angular.module('moviesApp')
.controller('detailsCtrl', function ($scope, $stateParams, searchFactory){
  $scope.details = {};
  $scope.getDetails = function(){
    searchFactory.getMovieDetails($stateParams.movieId)
      .then(function (data){
        $scope.details = data;
      });
  };
});
