'use strict';

var Myapp = angular.module('Myapp', ['ui.router', 'Myapp.Auth','Myapp.Admin'])
.run(function($rootScope) {
    $rootScope.test2 = false;
});



