'use strict';

var angularApp = angular.module('angularApp', []);

angularApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/form/:id/view', {
            templateUrl: 'views/view.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}).run(['$rootScope',  function($rootScope) {

}]);


