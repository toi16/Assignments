(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var users = [];
  var hasSignedUp = false;
  var menuItemFav = "";

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuNumber = function (menunumber) {
     menunumber = menunumber.toUpperCase();
     return $http.get(ApiPath + '/menu_items/' + menunumber + '.json').then(function (response) {
       return response.data;
         });


    };


    service.saveSignUp = function (firstName, lastName, email, phone, favorite, completed) {

          hasSignedUp = completed;
          menuItemFav = favorite;
          var user = {
          firstname: firstName,
          lastname: lastName,
          email: email,
          phone: phone
          };
        users.push(user);
        };

  service.getUser = function () {
        return users;

      };

  service.getStatus = function () {
     return hasSignedUp;
  };

  service.getMenuFav = function () {
    return menuItemFav;
  };
}



})();
