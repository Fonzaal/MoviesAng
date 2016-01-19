'use strict';

describe('Routes test', function (){

  //Load the main module
  beforeEach(module('moviesApp'));

  //Dependency injection
  var location, rootScope, templateCache, state;

  beforeEach(
    inject(function ($location, $rootScope, $templateCache, $state){
      location = $location;
      rootScope = $rootScope;
      templateCache = $templateCache;
      state = $state;
  }));

  describe ('Test for /search route', function (){
    beforeEach (function(){
      templateCache.put('views/search-list.html','');
    });
    it('should respond for the /search route', function (){
      expect(state.href('search')).toEqual('#/search');
    });
    /*it('should go to the /search route', function (){
      location.replace().url('#/search');
      rootScope.$digest();
      expect(state.current.name).toEqual('search');
    });*/
  });

  describe ('Test for /details route', function (){
    beforeEach (function (){
      templateCache.put('views/details.html','');
    });
    it('should respond for the /details route', function (){
      expect(state.href('details', {movieId: 'tt0944947'})).toEqual('#/details/tt0944947');
    });
  });
});
