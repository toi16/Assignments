(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var signup = this;

  signup.noNumber = true;
  signup.completed = false;
  signup.firstname ="";
  signup.lastname = "";
  signup.email = "";
  signup.phone = "";
  signup.menunumber = "";

  signup.saveUser = function () {
    var checkMenu = MenuService.getMenuNumber(signup.menunumber);
      checkMenu.then(function (response) {
      signup.noNumber = true;
      signup.completed = true;
      MenuService.saveSignUp(signup.firstname, signup.lastname, signup.email, signup.phone, signup.menunumber.toUpperCase(), signup.completed);

      })
      .catch(function (error) {
        signup.noNumber = false;
      });

};

}

})();
