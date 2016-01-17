var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://bus2016.firebaseio.com/");
  $scope.messages = $firebaseArray(ref);


 });
