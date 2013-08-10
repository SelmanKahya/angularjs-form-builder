'use strict';

angular.module('angularjsFormBuilderApp').service('FormService', function FormService($http) {

    var formsJsonPath = '/static-data/sample_forms.json';

    return {
        fields:[
            {
                name : 'textfield',
                value : 'Textfield'
            },
            {
                name : 'email',
                value : 'E-mail'
            },
            {
                name : 'password',
                value : 'Password'
            },
            {
                name : 'radio',
                value : 'Radio Buttons'
            },
            {
                name : 'dropdown',
                value : 'Dropdown List'
            },
            {
                name : 'date',
                value : 'Date'
            },
            {
                name : 'textarea',
                value : 'Text Area'
            },
            {
                name : 'checkbox',
                value : 'Checkbox'
            },
            {
                name : 'hidden',
                value : 'Hidden'
            }
        ],
        form:function (id) {
            // $http returns a promise, which has a then function, which also returns a promise
            var promise = $http.get(formsJsonPath).then(function (response) {
                var requestedForm = {};
                angular.forEach(response.data, function (form) {
                    if (form.form_id == id) requestedForm = form;
                });
                return requestedForm;
            });
            // Return the promise to the controller
            return promise;
        },
        forms: function() {
            var promise = $http.get(formsJsonPath).then(function (response) {
                return response.data;
            });
            return promise;
        }
    };
});
