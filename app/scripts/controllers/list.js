'use strict';

var ListCtrl = angular.module('angularjsFormBuilderApp').controller('ListCtrl', function ($scope, forms) {
    $scope.forms = forms;
});


ListCtrl.resolveForms = function($q, FormService) {
    var defer = $q.defer();
    FormService.forms().then(function(forms) {
        defer.resolve(forms);
    });
    return defer.promise;
}

