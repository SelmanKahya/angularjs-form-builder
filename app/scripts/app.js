'use strict';

var angularApp = angular.module('angularjsFormBuilderApp', []);

angularApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/forms', {
            templateUrl: 'views/list.html',
            controller: 'ListCtrl'
        })
        .when('/form/create', {
            templateUrl: 'views/create.html',
            controller: 'CreateCtrl'
        })
        .when('/form/:id/view', {
            templateUrl: 'views/view.html',
            controller: 'ViewCtrl'
        })
        .when('/form/:id/edit', {
            templateUrl: 'views/edit.html',
            controller: 'EditCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}).run(['$rootScope',  function($rootScope) {

    }]);


