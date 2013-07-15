'use strict';

var ViewCtrl = angular.module('angularjsFormBuilderApp').controller('ViewCtrl', function ($scope, form) {

    $scope.form = form;

});



ViewCtrl.resolve = function($q, $timeout, FormService) {
    var defer = $q.defer();
    FormService.form('image').then(function(form) {
        defer.resolve(form);
    });
    return defer.promise;
}