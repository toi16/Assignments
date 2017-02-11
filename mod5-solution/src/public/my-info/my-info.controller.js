(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService', 'ApiPath'];
function MyInfoController(MenuService, ApiPath) {
  var myInfo = this;
  var fav = MenuService.getMenuFav();
  myInfo.basePath = ApiPath;

   var menuData = MenuService.getMenuNumber(fav); // Get promise
   menuData.then(function(whatIWant) {
   myInfo.menuItemDisplay = whatIWant; //json data
  });


  myInfo.checkSignUp = MenuService.getStatus();

  myInfo.userInfo = MenuService.getUser();

}

})();
