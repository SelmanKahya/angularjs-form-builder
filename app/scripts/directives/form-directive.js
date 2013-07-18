'use strict';

angular.module('angularjsFormBuilderApp')
  .directive('formDirective', function () {
    return {
        controller: function($scope){},
        templateUrl: './views/directive-templates/form/form.html',
        restrict: 'E',
        scope: {
            form:'='
        },
        link: function postLink(scope, element, attrs) {
            // element.text('this is the formDirective directive');
        }
    };
  });
