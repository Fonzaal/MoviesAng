'use strict';

describe('Tests for searchFactory', function () {

  beforeEach(module('moviesApp'));

  var service,
    scope, http;

  // Inject dependencies to be used on the tests.
  beforeEach(inject(function ($httpBackend, $rootScope, searchFactory) {
    scope = $rootScope;//.$new();
    service = searchFactory;
    http = $httpBackend;
  }));

  it('Should get search results', function (){
    var term = 'Batman';
    http.expect('GET', 'http://www.omdbapi.com/?s='+ term)
      .respond(200, {});
    service.getMovieResults(term);
    http.flush();
  });

  it('Should get details results', function (){
    var term = 'tt0944947';
    http.expect('GET', 'http://www.omdbapi.com/?i='+ term)
      .respond(200, {});
    service.getMovieDetails(term);
    http.flush();
  });
});
