'use strict';

var Myapp = angular.module('Myapp', ['ui.router', 'Myapp.Auth'])
.run(function($rootScope) {
    $rootScope.test2 = false;
});



