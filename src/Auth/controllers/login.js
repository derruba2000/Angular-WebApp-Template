'use strict';


  angular.module('Myapp.Auth').controller('loginCtrl', function ($scope, authtoken,$rootScope,$state, alert) {

    $scope.Authenticate = function(){
        $rootScope.authenticated=true;
         authtoken.setData(true);
         alert('success', 'Hi!', 'Welcome back user 1');
    };
  });
