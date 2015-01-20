'use strict';

angular.module('Myapp.Admin').config(function ($stateProvider){

    $stateProvider
    .state('admin', {
            templateUrl: 'Admin/views/admin.html',
            url: '/admin'
    })
    .state('admin.users', {
            templateUrl: 'Admin/views/admin.users.html',
            url: '/adminusers'
    })
    .state('admin.systems', {
            templateUrl: 'Admin/views/admin.systems.html',
            url: '/adminsystems'
    });
});
