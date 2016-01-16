var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://bus-min-azure.firebaseio.com/current/BusInfo/");

  // create a synchronized array
  // click on `index.html` above to see it used in the DOM!
  $scope.messages = $firebaseArray(ref);

  $scope.calculateQuantity = function(busId) {
     $scope.quantityResult = "key is "+busId;
    // ref.startAt(busId).endAt(busId).on("value", function(snapshot) {
    //   console.log(snapshot.key()+snapshot.val());
    //   console.log("almost..."+snapshot.val().BusID);
    //   $scope.quantityResult = snapshot.val();
    //
    //   snapshot.forEach(function(childSnapshot) {
    //    // key will be "fred" the first time and "barney" the second time
    //    var key = childSnapshot.key();
    //    // childData will be the actual contents of the child
    //    var childData = childSnapshot.val();
    //  });
    //  var ref2 = new Firebase("https://bus-min-azure.firebaseio.com/current/BusInfo/1647");
    //  ref2.on("value", function(snapshot) {
    //    console.log(snapshot.key()+snapshot.val());
    //    console.log("almost..."+snapshot.val().BusID);
    //    $scope.quantityResult = snapshot.val();
     //
    //    snapshot.forEach(function(childSnapshot) {
    //     // key will be "fred" the first time and "barney" the second time
    //     var key = childSnapshot.key();
    //     // childData will be the actual contents of the child
    //     var childData = childSnapshot.val();
    //   });
    //  });





 };
});
