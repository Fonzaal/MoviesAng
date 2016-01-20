

angular.module('moviesApp')
  .factory('historyFactory',function(localStorageService){
    var searchTermsHistory = [];
    var historyItems = [];
    var historyFactory = {};

    historyFactory.addSearchTerm = function (title) {
      searchTermsHistory.push({Item : title});
      localStorageService.set('searchTermsHistory', searchTermsHistory);
    };
    historyFactory.addHistoryItem = function (title) {
      historyItems.push({Item : title});
      localStorageService.set('historyItems', historyItems);
    };
    return historyFactory;
  });
