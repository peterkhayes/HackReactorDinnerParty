var app = angular.module('dinnerRoulette', ['ngAnimate'])
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
.controller('main', function($scope, $filter, $http) {

  $http.get('/students')
  .success(function(data) {
    $scope.students = [];
    for (var i = 0; i < data.length; i++) {
      $scope.students.push({name: data[i], selected:false});
    }
  })
  .error(function(err){console.log(err);});

  $scope.select = function(student) {
    if (student) {
      student.selected = true;
    } else {
      var unselected = $filter('filter')($scope.students, {selected: false});
      var matches = $filter('filter')(unselected, $scope.search);
      if (matches.length === 1) {
        matches[0].selected = true;
      }
    }
    $scope.search = "";
  };

  $scope.unselect = function(student) {
    if (student) {
      student.selected = false;
    }
  };

  $scope.go = function() {
    var nameList = [];
    for (var i = 0; i < $scope.students.length; i++) {
      if ($scope.students[i].selected) {
        nameList.push($scope.students[i].name);
      }
    }
    $http({
      method: 'post',
      url: '/go',
      data: nameList
    }).success(function(groups) {
      $scope.groups = groups;
      console.log(groups);
    }).error(function() {
      $scope.submitted = false;
    });
    $scope.submitted = true;
  };

});