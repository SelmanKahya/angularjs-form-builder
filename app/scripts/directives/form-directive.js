'use strict';

angular.module('angularjsFormBuilderApp')
  .directive('formDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the formDirective directive');
      }
    };
  });
