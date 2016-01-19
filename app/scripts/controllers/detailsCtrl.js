"use strict";

/**
 * @ngdoc overview
 * @name detailsCtrl
 * @description
 *
 */

angular.module('moviesApp')
.controller('detailsCtrl', function ($scope, $stateParams, searchFactory, $log){
  $scope.details = {};
  $scope.seasonsList = {
    Seasons: []
  };
  $scope.episodeDetails = {};
  $scope.getDetails = function(){
    searchFactory.getMovieDetails($stateParams.movieId)
      .then(function (data){
        $scope.details = data;
      });
  };

  //TODO: Improve getEpisodes functionality to get the exact number of seasons as a limit.
  $scope.getEpisodes = function (){
    for (var i = 0; i < 7; i++){
      searchFactory.getEpisodes($stateParams.movieId, i).then(function(data){
        if(data.Response != 'False'){
          $scope.seasonsList.Seasons.push(data);
        }
      });
    }
    $log.log($scope.episodes);
  }

  $scope.getEpisodeDetail = function (season, episode){
    searchFactory.getEpisodeDetails($stateParams.movieId, season, episode)
      .then(function(data){
        $scope.episodeDetails = data.Plot;
      });

  }
});
