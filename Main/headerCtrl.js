'use strict';


  angular.module('Myapp').controller('headerCtrl', function ($scope, UserAuthenticated) {
    
    $scope.Authenticated = { value : UserAuthenticated};  
      
    $scope.isAuthenticated = function(){
            return $scope.Authenticated;
    }
    
    
    $scope.$watch(
        'UserAuthenticated',
        function(){
             $scope.Authenticated = UserAuthenticated;
             console.log("Header " + $scope.Authenticated);

        }, true
    );
    
  });
