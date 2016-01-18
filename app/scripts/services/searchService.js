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
      var result = $http.get('http://www.omdbapi.com/?s=' + title)
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
      var result = $http.get('http://www.omdbapi.com/?i='+id)
        .success(function(data){
          $log.log(data);
          deferred.resolve(data);
        })
        .error(function(){
          deferred.reject('Error');
        });
      return deferred.promise;
    }
    return searchFactory;
  });
