'use strict';

var MyappAuth = angular.module('Myapp.Auth', ['ui.router', ])
.run(function($rootScope) {
    $rootScope.authenticated = false;
});





