angularjs-form-builder
======================

A simple form builder application written in AngularJS. It uses custom directives.

For a complete overview of the project and features, see http://selmanh.github.io/angularjs-form-builder

## About

I have been working on AngularJS project for last couple of months. One of my assignments was to implement custom form builder that allows system admins to create custom forms, and allows users to view created forms, fill them and submit the data. 

It took plenty of time to finish this task. While doing it, I had to make 100+ searches on Google, spend couple of days, and read a lot of stuff. So, I decided to create an open-source project and share my knowledge on this topic.

### Dependencies
* AngularJS 1.0.7+
* Bootstrap 2.3.2+
* Grunt (to build the project) 0.4.1+

### Technical Details

Currently, there are just one service (form-service) and two directives (form-directive and field-directive). 

Form service helps us to retrieve form properties from a json file. It also holds an array of possible fields that can be used while creating a new form.

After getting the form variable, we use it in form-directive as follows:

``` 
<form-directive form="form"> </form-directive>
``` 

And inside the form-directive, we use field-directive: 

```
<div ng-repeat="field in form.fields">
   <field-directive field="field"> </field-directive>
</div>
```

Form directive checks type of the field, and based on that type, it puts the template between directive tags.

```JAVASCRIPT
switch(type) {
     case 'textfield':
         templateUrl = './views/directive-templates/field/textfield.html';
         break;
     case 'email':
         ...
```

At the end, here is how it looks:

```html
<form-directive form="form" class="ng-isolate-scope ng-scope">
   ...
   <form name="myForm" id="myForm">
      ...
      <div ng-repeat="field in form.fields">
         <field-directive field="field">
            ...
         </field-directive>
      </div>
   </form>
</form-directive>
```


### Known Issues

I will try to fix those. Feel free to send me PRs.

* Date-picker - calendar doesn't show up.

* Drop-down - empty option appears as the first child of select element and default value doesn't get selected.

## Installing Modules

* First you need to install node_modules. Cd to repository folder.  ``` $cd angularjs-form-builder ```

* Execute ``` $sudo npm install ```

* Then execute ``` $sudo bower install ```

## Launching the App

* Change directory to app folder  ``` $cd app ```

* Now, you can start the grunt server: ``` $grunt server ```

* It will open the AngularJS app in your default browser. 

## Contact

 - Selman Kahya - ([website](http://www.selmanh.com)) - (hey@selmanh.com)
