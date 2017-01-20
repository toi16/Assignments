(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchItems = "";
  $scope.message = "";
  $scope.checkIfTooMuch = function (){
    var totalLunchValue = checkItems($scope.lunchItems);
    $scope.message = totalLunchValue;
 };

 function checkItems(string) {
   var numberOfItems = 0;
   var messageIs = "";
   if (string === "") {
     messageIs = "Please enter data first"
   }
   else {
   var arrayOfItems = string.split(','); //Remove commas and create array of items
   var numberOfItems = arrayOfItems.length;
   if (numberOfItems <= 3) {
     messageIs = "Enjoy!";
   }
   else if (numberOfItems > 3) {
    messageIs = "Too Much!";
   }

    }
  return messageIs;
 };

}

})();
