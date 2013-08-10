'use strict';

var ViewCtrl = angularApp.controller('ViewCtrl', function ($scope, FormService, $routeParams) {
    $scope.form = {};

    FormService.form($routeParams.id).then(function(form) {
        $scope.form = form;
    });
});