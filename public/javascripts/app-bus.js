var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://bus2016.firebaseio.com/current/BusInfo/");
  $scope.messages = $firebaseArray(ref);

  $scope.calculateQuantity = function(busId) {
    var fbRef = new Firebase("https://bus2016.firebaseio.com/"+busId);
     return $firebaseArray(fbRef);
   };
 });
