'use strict';

describe('Controller: searchCtrl', function () {

  // load the controller's module
  beforeEach(module('moviesApp'));

  var controller,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));


});
