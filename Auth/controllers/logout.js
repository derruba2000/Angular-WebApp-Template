'use strict';


  angular.module('Myapp.Auth').controller('logoutCtrl', function ($scope, authtoken,$rootScope,$state) {
  
      if (!authtoken.getData()){
         $state.go('home');    
      }
      
      $rootScope.authenticated=false;
      authtoken.setData(false);
      authtoken.removeData();
      $state.go('home');

  });
