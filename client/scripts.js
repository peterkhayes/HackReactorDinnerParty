var app = angular.module('dinnerRoulette', [])
.directive('ngEnter', function() {
  return function(scope, element, attrs) {
    element.bind("keydown keypress", function(event) {
      if(event.which === 13) {
        scope.$apply(function(){
          scope.$eval(attrs.ngEnter);
        });
        event.preventDefault();
      }
    });
  };
})
.controller('main', function($scope, $filter) {

  $http.get('/students')
  .success(function(data) {
    $scope.students = data;
  });

  $scope.select = function(student) {
    if (student) {
      student.selected = true;
      $scope.search = "";
    } else {
      var unselected = $filter('filter')($scope.students, {selected: false});
      var matches = $filter('filter')(unselected, $scope.search);
      if (matches.length === 1) {
        matches[0].selected = true;
        $scope.search = "";
      }
    }
  };

  $scope.unselect = function(student) {
    if (student) {
      student.selected = false;
    }
  };

});