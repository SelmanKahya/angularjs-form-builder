'use strict';

angular.module('angularjsFormBuilderApp')
  .directive('formDirective', function ($dialog) {
    return {
        controller: function($scope){
            $scope.submit = function(){
                alert('Form submitted..');
                $scope.form.submitted = true;
            }

            $scope.cancel = function(){
                alert('Form canceled..');
                console.log($scope.myForm)
            }
        },
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
