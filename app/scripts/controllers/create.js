'use strict';

angular.module('angularjsFormBuilderApp') .controller('CreateCtrl', function ($scope, FormService) {

    $scope.form = {};
    $scope.form.fields = [];

    // Add field drop-down:
    $scope.addField = {};
    $scope.addField.types = FormService.fields;
    $scope.addField.new = $scope.addField.types[0].name;
    $scope.addField.lastAddedID = 0;

    // ACCORDION Settings
    $scope.accordion = {}
    $scope.accordion.oneAtATime = true;
    $scope.accordion.fields = [];

    $scope.newFieldID = 0;
    $scope.addNewField = function(){

        var newField = {
            "field_id" : $scope.addField.lastAddedID,
            "field_title" : "New field - " + ($scope.addField.lastAddedID),
            "field_type" : $scope.addField.new,
            "field_name" : "",
            "field_value" : "",
            "field_order" : $scope.addField.lastAddedID
        };

        // put newField into fields array
        $scope.form.fields[$scope.addField.lastAddedID] = newField;

        // create new accordion item
        $scope.accordion.fields[$scope.addField.lastAddedID] = {title: $scope.form.fields[$scope.addField.lastAddedID].field_title, content:''};

        // incr field_id counter
        $scope.addField.lastAddedID++;
    }
});
