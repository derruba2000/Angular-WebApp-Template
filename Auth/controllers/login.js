'use strict';


  angular.module('Myapp.Auth').controller('loginCtrl', function ($scope, authtoken,$rootScope,$state) {


    $scope.Authenticate = function(){
        $rootScope.authenticated=true;
         authtoken.setData(true);
    };
    $scope.Logout = function(){
        $rootScope.authenticated=false;
        authtoken.setData(false);
        $state.go('home');
    };
    
  });
