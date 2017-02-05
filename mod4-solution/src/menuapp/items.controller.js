(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['itemResult'];
function ItemsController(itemResult) {
  var itemDetail = this;
  itemDetail.itemList = itemResult.menu_items;
  
}

})();
