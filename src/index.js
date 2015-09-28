var app = angular.module('insuranceApp', []);


app.controller('mainController', function ($scope) {

  $scope.rooms = [];
  $scope.addRoom = function() {
    $scope.rooms.push($scope.newRoom);
    $scope.newRoom = '';
  }

  $scope.items = [];

  $scope.addItem = function(item) {
    item['total'] = item.qty * item.cost;
    $scope.items.push(item);
    console.log(item);
  }

});
