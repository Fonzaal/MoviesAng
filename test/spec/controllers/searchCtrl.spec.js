'use strict';

describe('Controller: searchCtrl', function () {

  // load the controller's module
  beforeEach(module('moviesApp'));

  var controller, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    //Create a new child scope for the controller.
    scope = $rootScope.$new();
    //Create a new instance of the searchCtrl.
    controller = $controller('searchCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have movie defined', function(){
    expect(scope.movie).toBeDefined();
  });

  it('should have moviesList defined', function(){
    expect(scope.moviesList).toBeDefined();
  });

});
