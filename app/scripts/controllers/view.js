'use strict';

var ViewCtrl = angular.module('angularjsFormBuilderApp').controller('ViewCtrl', function ($scope, form) {
    $scope.form = form;
});


ViewCtrl.resolveForm = function($q, FormService, $route) {
    var defer = $q.defer();
    FormService.form($route.current.params.id).then(function(form) {
        defer.resolve(form);
    });
    return defer.promise;
}