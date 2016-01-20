'use strict';

/**
 * @ngdoc overview
 * @name searchCtrl
 * @description
 *
 */

angular.module('moviesApp')
  .controller('searchCtrl', function($scope, searchFactory, historyFactory){
    //REMINDER: Do not add variables used on the whole app on a single controller.
    //Their values are going to be deleted when you change to another controller.
    //Define them as another service or in global scope.
    //$scope.searchTermHistory = [];
    //$scope.historyItems = [];

    $scope.moviesList = {};
    $scope.movie = "";

    $scope.addSearchTerm = function (){
      historyFactory.addSearchTerm($scope.movie);
    };
    $scope.addHistoryItem = function (title){
      historyFactory.addHistoryItem(title);
    };

    $scope.getMovies = function(){
      searchFactory.getMovieResults($scope.movie)
        .then(function(data){
          $scope.moviesList = data;
          $scope.addSearchTerm();
        });
    };
  });
