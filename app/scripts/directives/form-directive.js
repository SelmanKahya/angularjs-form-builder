'use strict';

angularApp.directive('formDirective', function () {
    return {
        controller: function($scope, $timeout){
            $scope.submit = function(){
                alert('Form submitted..');
                $scope.form.submitted = true;

                $timeout(function(){
                    $scope.form.submitted = false;
                }, 4000);
            }

            $scope.cancel = function(){
                alert('Form canceled..');
            }
        },
        templateUrl: './views/directive-templates/form/form.html',
        restrict: 'E',
        scope: {
            form:'='
        }
    };
  });
