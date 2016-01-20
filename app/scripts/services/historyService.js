

angular.module('moviesApp')
  .factory('historyFactory',function(localStorageService){
    var searchTermsHistory = { Items : [] };
    var historyItems = { Items: [] };
    var historyFactory = {};

    historyFactory.addSearchTerm = function (title) {
      searchTermsHistory['Items'].push({Title : title});
      localStorageService.set('searchTermsHistory', searchTermsHistory);
    };

    historyFactory.addHistoryItem = function (title) {
      historyItems['Items'].push({Title : title});
      localStorageService.set('historyItems', historyItems);
    };

    historyFactory.getSearchTerms = function (){
      return localStorageService.get('searchTermsHistory');
    };

    historyFactory.getHistoryItems = function (){
      return localStorageService.get('historyItems');
    };

    //Get items from local storage if they previously exists on start of app.
    if((historyItems.Items.length == 0)||(searchTermsHistory.Items.length == 0)){
      console.log('Entered to load existing information on ls.')
      if(localStorageService.get('searchTermsHistory') != null){
        searchTermsHistory = localStorageService.get('searchTermsHistory');
      }
      if (localStorageService.get('historyItems') != null){
        historyItems = localStorageService.get('historyItems');
      }
    }

    return historyFactory;
  });
