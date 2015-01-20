'use strict';

angular.module('Myapp.Auth').config(function ($stateProvider, $urlRouterProvider, $locationProvider){

    $stateProvider
    .state('register', {
            templateUrl: 'Auth/register.html',
            url: '/register'
    })
    .state('login', {
            templateUrl: 'Auth/login.html',
            url: '/login',
            controller: 'loginCtrl'
    })
    .state('logout', {
            templateUrl: 'Auth/logout.html',
            url: '/logout',
            controller: 'loginCtrl'
    });
});
