(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService'];
function MyInfoController(MenuService) {
  var myInfo = this;
  myInfo.userInfo = MenuService.getUser();
  
}

})();
