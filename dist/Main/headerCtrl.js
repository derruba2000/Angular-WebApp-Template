'use strict';


  angular.module('Myapp').controller('headerCtrl', function ($scope, authtoken, $rootScope) {
    
 
    $scope.isAuthenticated=function(){
       return authtoken.getData();
    };
    $scope.ver=false; 
    
 $scope.$watch(function () { return authtoken.getData; },
                function (value) {
                    console.log("In $watch - bla:" + value() + "-" + $scope.teste );
                   
                    if (value() == true){
                        $scope.teste = true;
                        
                    }else{
                        $scope.teste = null;
                    }

                }
            );      
      
  $scope.teste= false;
    
      
  });
