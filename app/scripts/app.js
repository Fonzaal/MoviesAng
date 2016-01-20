'use strict';

/**
 * @ngdoc overview
 * @name moviesApp
 * @description
 *
 * Main module of the application.
 */

angular
  .module('moviesApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'LocalStorageModule'
  ])
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('mov');
  });
