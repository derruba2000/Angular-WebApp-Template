'use strict';


  angular.module('Myapp').controller('headerCtrl', function ($scope, authtoken, $rootScope) {

      $scope.isAuthenticated= authtoken.getData;
  });
