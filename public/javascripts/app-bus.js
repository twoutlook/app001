var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://bus2016.firebaseio.com/");

  //$scope.messages = $firebaseArray(ref);

  $scope.messages =[
    {carNum:'001-FY'},
    {carNum:'001-FP'},
    {carNum:'002-FQ'},

  ];



  $scope.messages2={};
  $scope.check = function (searchText) {
      console.log("going to use it =>"+searchText);
      var ref2=ref.child(searchText);
        $scope.messages2 = $firebaseArray(ref2);
  }

 });
