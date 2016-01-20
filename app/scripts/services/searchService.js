'use strict';

/**
 * @ngdoc overview
 * @name searchFactory
 * @description
 *
 */

angular.module('moviesApp')
  .factory('searchFactory',function($http, $q, $log, $cacheFactory){
    var searchFactory = {};
    var cache = $cacheFactory.get('$http');

    searchFactory.getMovieResults = function (title){
      var deferred = $q.defer();
      var url = 'http://www.omdbapi.com/?s=' + title;
      var cacheData = cache.get(url);

      if(cacheData){
        $log.log('got data from cache');
        deferred.resolve(angular.fromJson(cacheData[1]).Search);
      }
      else {
        $http.get(url , {
            cache: true
          })
          .success(function(data){
            $log.log('got data from webservice')
            deferred.resolve(data.Search);
          })
          .error(function(data){
            deferred.reject('Error');
          });
      }
      return deferred.promise;
    };

    searchFactory.getMovieDetails = function (id){
      var deferred = $q.defer();
      var url = 'http://www.omdbapi.com/?i=';
      var cacheData = cache.get(url + id);

      if(cacheData){
        $log.log('got data from cache');
        deferred.resolve(angular.fromJson(cacheData[1]));
      }
      else {
        $http.get(url + id , {
            cache: true
          })
          .success(function(data){
            $log.log('got data from webservice');
            deferred.resolve(data);
          })
          .error(function(){
            deferred.reject('Error');
          });
      }
      return deferred.promise;
    };

    searchFactory.getEpisodes = function (id, season){
      var deferred = $q.defer();
      var url = 'http://www.omdbapi.com/?i=' + id + '&Season=' + season;
      var cacheData = cache.get(url);

      if(cacheData){
        $log.log('got data from cache');
        deferred.resolve(angular.fromJson(cacheData[1]));
      }
      else {
        $http.get(url , {
            cache: true
          })
          .success(function(data){
            $log.log('got data from webservice');
            deferred.resolve(data);
          })
          .error(function(){
            deferred.reject('Error');
          });
      }
      return deferred.promise;
    };

    searchFactory.getEpisodeDetails = function (id, season, episode){
      var deferred = $q.defer();
      var url = 'http://www.omdbapi.com/?i=' + id + '&Season=' + season + '&Episode=' + episode;
      var cacheData = cache.get(url);

      if(cacheData){
        $log.log('got data from cache');
        deferred.resolve(angular.fromJson(cacheData[1]));
      }
      else {
        $http.get(url)
          .success(function(data){
            $log.log('got data from webservice');
            deferred.resolve(data);
          })
          .error(function(){
            deferred.reject('Error');
          });
      }
      return deferred.promise;
    };

    return searchFactory;
  });
