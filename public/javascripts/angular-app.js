var iCompleted = angular.module('iCompleted', []);
iCompleted.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('//');
    $interpolateProvider.endSymbol('//');
});

iCompleted.controller('GoalListCtrl', function ($scope, $http) {

  $scope.fetch = function() {
    $http.get('/goals').success(function(data) {
      $scope.goals = data;
      console.log('data fetching complete');

    });
  };

  $scope.createGoal = function(name, description) {
    $http.post("/goals", {name : name, description: description}).success(function(data, status) {
        $scope.fetch();
        console.log('created goal');
    });
  };
  $scope.updateGoal = function(){
    $http.put('/goals/' + $scope.currentGoal._id, $scope.currentGoal).success(function(data, status){
      $scope.fetch();
      console.log('edit complete');
      console.log($('#name'));
    });
  }
  $scope.edit = function(goal){
    console.log(goal._id);
    $scope.currentGoal = goal;
  }
  $scope.saveGoal = function(goal){
    $http.put("/goals/", {name: name, description: description, updated_at: Date}).success(function(data, status){
      $scope.fetch();
      console.log('updating');
    })
  }

  $scope.completeGoal = function(goal) {
    console.log(goal);
    var answer = confirm("Are you sure you want to complete this task?");
    if (answer == true) {
      console.log("Deleted Task with _id:" + goal["_id"]);
      $http.delete('/goals/' + goal["_id"]).success(function(){
        $scope.fetch();
      });
    }

  };

  $scope.fetch();
});
