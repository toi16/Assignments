(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

var buyList = this;

buyList.items = ShoppingListCheckOffService.getToBuyItems();

buyList.removeItem = function (itemIndex) {
  ShoppingListCheckOffService.removeItem(itemIndex);
};

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

var boughtList = this;

boughtList.items = ShoppingListCheckOffService.getBoughtItems();

    }




 function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var toBuyItems = [
      {name:"cookies", quantity:"10"},
      {name:"biscuits", quantity:"15"},
      {name:"weetabix", quantity: "1"},
      {name:"apples", quantity:"7"},
      {name:"bananas", quantity:"12"},
      {name:"oranges", quantity:"10"},
    ];

var boughtItems = [];

service.getToBuyItems = function () {
  return toBuyItems;
};

service.getBoughtItems = function () {
 return boughtItems;
};

service.removeItem = function (itemIndex) {
var item = toBuyItems[itemIndex];
  boughtItems.push(item);
  toBuyItems.splice(itemIndex, 1);
};

  }

})();
