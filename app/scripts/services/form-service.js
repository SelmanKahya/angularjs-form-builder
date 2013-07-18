'use strict';

angular.module('angularjsFormBuilderApp').service('FormService', function FormService($http) {

    var formsJsonPath = '/static-data/sample_forms.json';

    return {
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
        },
        addForm:function (form) {

        },
        updateForm:function (form) {

        },
        deleteForm:function (id) {

        }
    };
});
