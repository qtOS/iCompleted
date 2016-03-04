var iCompleted = angular.module('iCompleted', []);


iCompleted.controller('GoalListCtrl', function ($scope, $http) {

  $scope.fetch = function() {
    $http.get('/goals').success(function(data) {
      console.log('fetched data')
      $scope.tasks = data;
    });
  };

  $scope.createGoal = function(name, description) {
    $http.post("/goals", {name : name, description: description}).success(function(data, status) {
        $scope.fetch();
    });
  };

  $scope.completeGoal = function(goal) {
    console.log(goal);
    var answer = confirm("Are you sure you want to complete this task?");
    if (answer == true) {
      console.log("Deleted Task with _id:" + goal["_id"]);
      $http.delete('/' + goal["_id"]);
      $scope.fetch();
    }

  };

  $scope.fetch();
});
