'use strict';

angularApp.controller('CreateCtrl', function ($scope, $dialog, FormService) {

    // preview form mode
    $scope.previewMode = false;

    // our form
    $scope.form = {};
    $scope.form.form_id = 1;
    $scope.form.form_name = 'My Form';
    $scope.form.form_fields = [];

    // form using for preview purposes, form will be copied into this
    // otherwise, actual form value gets manipulated in preview mode
    $scope.previewForm = {};

    // add field drop-down:
    $scope.addField = {};
    $scope.addField.types = FormService.fields;
    $scope.addField.new = $scope.addField.types[0].name;
    $scope.addField.lastAddedID = 0;

    // ACCORDION Settings
    $scope.accordion = {}
    $scope.accordion.oneAtATime = true;

    // create new field
    $scope.addNewField = function(){

        // incr field_id counter
        $scope.addField.lastAddedID++;

        var newField = {
            "field_id" : $scope.addField.lastAddedID,
            "field_title" : "New field - " + ($scope.addField.lastAddedID),
            "field_type" : $scope.addField.new,
            "field_value" : "",
            "field_required" : true
        };

        // put newField into fields array
        $scope.form.form_fields.push(newField);
    }

    // deletes particular field
    $scope.deleteField = function (field_id){
        for(var i = 0; i < $scope.form.form_fields.length; i++){
            if($scope.form.form_fields[i].field_id == field_id){
                $scope.form.form_fields.splice(i, 1);
                break;
            }
        }
    }

    // deletes everything
    $scope.reset = function (){
        $scope.form.form_fields.splice(0, $scope.form.form_fields.length);
        $scope.addField.lastAddedID = 0;
    }

    // preview form
    $scope.previewOn = function(){
        if($scope.form.form_fields == null || $scope.form.form_fields.length == 0) {
            var title = 'Error';
            var msg = 'No fields added yet, please add fields to the form before preview.';
            var btns = [{result:'ok', label: 'OK', cssClass: 'btn-primary'}];

            $dialog.messageBox(title, msg, btns).open();
        }
        else {
            $scope.previewMode = !$scope.previewMode;
            $scope.form.submitted = false;
            angular.copy($scope.form, $scope.previewForm);
        }
    }

    // hide previewing form, go back to create mode
    $scope.previewOff = function(){
        $scope.previewMode = !$scope.previewMode;
        $scope.form.submitted = false;
    }


    // decides whether options field will be shown (true for dropdown and radio fields)
    $scope.showAddOptions = function (field){
        if(field.field_type == "radio" || field.field_type == "dropdown")
            return true;
        else
            return false;
    }

    // add new option to field
    $scope.addOption = function (field){
        if(!field.field_options)
            field.field_options = new Array();

        var lastOptionID = 0;
        if(field.field_options[field.field_options.length-1])
            lastOptionID = field.field_options[field.field_options.length-1].option_id;

        var option_id = lastOptionID + 1;

        var newOption = {
            "option_id" : option_id,
            "option_title" : "Option " + option_id,
            "option_value" : option_id
        };

        // put newField into fields array
        field.field_options.push(newOption);
    }

    // add new option to field
    $scope.deleteOption = function (field, option){
        for(var i = 0; i < field.field_options.length; i++){
            if(field.field_options[i].option_id == option.option_id){
                field.field_options.splice(i, 1);
                break;
            }
        }
    }
});
