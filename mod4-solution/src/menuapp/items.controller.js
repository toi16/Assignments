(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService', 'itemResult'];
function ItemsController(MenuDataService, itemResult) {
  var itemDetail = this;
  itemDetail.itemList = itemResult;
}

})();
