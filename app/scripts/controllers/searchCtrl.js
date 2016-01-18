/**
 * @ngdoc overview
 * @name searchCtrl
 * @description
 *
 */
angular.module('moviesApp')
  .controller('searchCtrl', function($scope, searchFactory){
    $scope.moviesList = {};
    $scope.movie = "";
    $scope.getMovies = function(){
      searchFactory.getMovieResults($scope.movie)
        .then(function(data){
          $scope.moviesList = data;
        });
    };
  });
