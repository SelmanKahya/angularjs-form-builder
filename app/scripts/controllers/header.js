'use strict';

angular.module('angularjsFormBuilderApp')
  .controller('HeaderCtrl', function ($scope, $location) {
        $scope.$location = $location;
});
