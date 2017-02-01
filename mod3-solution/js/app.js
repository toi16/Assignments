(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
var narrow=this;

narrow.searchTerm = "";
narrow.list = [];
narrow.search = function () {
  MenuSearchService.getMatchedMenuItems(narrow.searchTerm).then(function(filtered){
    narrow.list = filtered;
  });

  };

narrow.removeItem = function (itemIndex) {
  narrow.list.splice(itemIndex, 1);
};

narrow.emptyList = function () {
  if (narrow.list.length == 0) {
    return true;
  } else {
    return false;
  }

};

} //End of controller

function FoundItemsDirective() {
  var ddo = {
  templateUrl: 'displayList.html',
  scope: {
    found: '<',
    onRemove: '&'
    }

  };

  return ddo;
} // End of directive


MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    return $http({
    method: "GET",
    url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    }).then(function (response){
        var filteredList = [];
        var foundItems = response.data.menu_items;
        for (var i = 0; i < foundItems.length; i++){
          if (foundItems[i].description.indexOf(searchTerm) > 0){
            filteredList.push(foundItems[i]);

          }
        }
      return filteredList;
  });

};
}  //End of service




})();
