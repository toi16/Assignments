(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var users = [];

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
    var response = $http.get(ApiPath + '/menu_items/' + menunumber + '.json');
    return response;
    };


    service.saveSignUp = function (firstName, lastName, email, phone, favorite, completed) {

          var hasSignedUp = completed;
          var user = {
          firstname: firstName,
          lastname: lastName,
          email: email,
          phone: phone,
          favorite: favorite
        };
        users.push(user);
        };

  service.getUser = function () {
        return users;
      };


}



})();
