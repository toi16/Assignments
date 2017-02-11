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
    console.log(checkMenu);
      checkMenu.then(function (response) {
      signup.noNumber = true;
      console.log(signup.noNumber);
      MenuService.saveSignUp(signup.firstname, signup.lastname, signup.email, signup.phone, signup.menunumber, signup.completed);
      signup.completed = true;
      })
      .catch(function (error) {
        signup.noNumber = false;
      });

};

}

})();
