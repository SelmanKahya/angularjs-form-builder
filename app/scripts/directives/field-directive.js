'use strict';

angularApp.directive('fieldDirective', function ($http, $compile) {

        var getTemplateUrl = function(field) {
            var type = field.field_type;
            var templateUrl = '';

            switch(type) {
                case 'textfield':
                    templateUrl = './views/directive-templates/field/textfield.html';
                    break;
                case 'email':
                    templateUrl = './views/directive-templates/field/email.html';
                    break;
                case 'textarea':
                    templateUrl = './views/directive-templates/field/textarea.html';
                    break;
                case 'checkbox':
                    templateUrl = './views/directive-templates/field/checkbox.html';
                    break;
                case 'date':
                    templateUrl = './views/directive-templates/field/date.html';
                    break;
                case 'dropdown':
                    templateUrl = './views/directive-templates/field/dropdown.html';
                    break;
                case 'hidden':
                    templateUrl = './views/directive-templates/field/hidden.html';
                    break;
                case 'password':
                    templateUrl = './views/directive-templates/field/password.html';
                    break;
                case 'radio':
                    templateUrl = './views/directive-templates/field/radio.html';
                    break;
            }
            return templateUrl;
        }

        var linker = function(scope, element) {
            // GET template content from path
            var templateUrl = getTemplateUrl(scope.field);
            $http.get(templateUrl).success(function(data) {
                element.html(data);
                $compile(element.contents())(scope);
            });
        }

        return {
            template: '<div>{{field}}</div>',
            restrict: 'E',
            scope: {
                field:'='
            },
            link: linker
        };
  });
