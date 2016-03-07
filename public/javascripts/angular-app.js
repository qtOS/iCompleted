var iCompleted = angular.module('iCompleted', []);
iCompleted.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('//');
    $interpolateProvider.endSymbol('//');
});

iCompleted.controller('GoalListCtrl', function ($scope, $http) {

  $scope.fetch = function() {
    $http.get('/goals').success(function(data) {
      console.log('fetched the data');
      $scope.goals = data;
      console.log(data[1]);
    });
  };

  $scope.createGoal = function(name, description) {
    $http.post("/goals", {name : name, description: description}).success(function(data, status) {
        $scope.fetch();
        console.log('created goal');
    });
  };

  $scope.completeGoal = function(goal) {
    console.log(goal);
    var answer = confirm("Are you sure you want to complete this task?");
    if (answer == true) {
      console.log("Deleted Task with _id:" + goal["_id"]);
      $http.delete('/goals/' + goal["_id"]);
      $scope.fetch();
    }

  };

  $scope.fetch();
});
