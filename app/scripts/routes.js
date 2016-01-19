'use strict';

/**
 * @ngdoc overview
 * @name moviesApp
 * @description
 *
 * Routes of the application are stored here.
 */

angular.module('moviesApp')
  .config(function($stateProvider, $urlRouterProvider){
    //If there is any other route
    $urlRouterProvider.otherwise('/search');

    $stateProvider
      .state('search',{
        url: '/search',
        templateUrl: '/views/search-list.html'
      })
      .state('details',{
        url: '/details/:movieId',
        templateUrl: '/views/details.html'
      });
  });
