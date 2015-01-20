'use strict';


  angular.module('Myapp.Auth').controller('loginCtrl', function ($scope, authtoken,$rootScope,$state) {


    $scope.Authenticate = function(){
        $rootScope.authenticated=true;
         authtoken.setData(true);
         console.log("DATA2-"+authtoken.getData());
    };
    $scope.Logout = function(){
        $rootScope.authenticated=false;
        authtoken.setData(false);
        $state.go('home');
    };
    
    $scope.TMP=function(){return authtoken.getData()};
                                          
    $scope.contador=$rootScope.authenticated;
 
   
    
    
  });
