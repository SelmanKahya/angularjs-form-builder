'use strict';

angular.module('angularjsFormBuilderApp')
  .controller('CreateCtrl', function ($scope) {
    $scope.steps = {
        '1' : {
            name : 'Step 1: Form Properties',
            active : false
        },
        '2' : {
            name : 'Step 2: Form Fields',
            active : false
        }
    }
  });
