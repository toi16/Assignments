(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['catResult'];
function CategoriesController(catResult) {
  var catCtrl = this;
  catCtrl.catList = catResult;
    
  };


})();
