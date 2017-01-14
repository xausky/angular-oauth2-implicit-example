'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp')
  .controller('MainCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.name = "Anonymous";
    $scope.getName = function(){
        $http.get("http://localhost:4030/server/api/user")
        .then(function(response) {
            $scope.name = response.data.name;
        },function(e) {
            console.error(e);
        });
    }
    $scope.getName();
  });
