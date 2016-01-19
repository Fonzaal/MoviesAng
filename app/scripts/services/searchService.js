'use strict';

/**
 * @ngdoc overview
 * @name searchFactory
 * @description
 *
 */

angular.module('moviesApp')
  .factory('searchFactory',function($http, $q, $log){
    var searchFactory = {};

    searchFactory.getMovieResults = function (title){
      var deferred = $q.defer();
      $http.get('http://www.omdbapi.com/?s=' + title)
          .success(function(data){
            $log.log(data.Search);
            deferred.resolve(data.Search);
          })
          .error(function(data){
            deferred.reject('Error');
          });
      return deferred.promise;
    };

    searchFactory.getMovieDetails = function (id){
      var deferred = $q.defer();
      $http.get('http://www.omdbapi.com/?i='+id)
        .success(function(data){
          //$log.log(data);
          deferred.resolve(data);
        })
        .error(function(){
          deferred.reject('Error');
        });
      return deferred.promise;
    };

    searchFactory.getEpisodes = function (id, season){
      var deferred = $q.defer();
      $http.get('http://www.omdbapi.com/?i=' + id + '&Season='+season)
        .success(function(data){
          //$log.log(data);
          deferred.resolve(data);
        })
        .error(function(){
          deferred.reject('Error');
        });
      return deferred.promise;
    };
    searchFactory.getEpisodeDetails = function (id, season, episode){
      var deferred = $q.defer();
      $http.get('http://www.omdbapi.com/?i=' + id + '&Season=' + season + '&Episode=' + episode)
        .success(function(data){
          $log.log(data);
          deferred.resolve(data);
        })
        .error(function(){
          deferred.reject('Error');
        });
      return deferred.promise;
    };

    return searchFactory;
  });
