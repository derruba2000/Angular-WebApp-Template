'use strict';


  angular.module('Myapp.Auth').controller('loginCtrl', function ($scope, UserAuthenticated, $provide) {
    $scope.isAuthenticated = function(){
            return UserAuthenticated;
    }
    
    $scope.Authenticate = function(){
            UserAuthenticated=true;
            $provide.value(UserAuthenticated,true);
            this.value('UserAuthenticated', true);
            console.log("User Authenticated " + UserAuthenticated);
    }
    
    
  });
