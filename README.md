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

## Installing the Application

* First, install bower and grunt globally if you don't have already:
 ```
  $ npm install -g grunt-cli
  $ npm install -g grunt
  $ npm install -g bower 
 ```

* Then, clone git repo and cd to project folder: 
 ``` 
  $ git clone git@github.com:/selmanh/angularjs-form-builder.git 
  $ cd angularjs-form-builder/ 
 ```
  
* Now, you need to install required node packages: 
 ``` 
  $ npm install 
 ``` 
 
* And finally, install bower dependencies: 
 ``` 
  $ bower install 
 ``` 
 
## Launching the App

* Start the grunt server: 
 ```
  $ grunt server --force
 ```
 
* It will open the AngularJS app in your default browser. 

### Technical Details

Currently, there are one service (form-service) and two directives (form-directive and field-directive). 

The form service helps to retrieve form properties from a json file. It also holds an array of possible fields that can be used while creating a new form.

After getting the form variable, we use it in the form-directive as follows:

``` 
<form-directive form="form"> </form-directive>
``` 

And inside the form-directive, we use the field-directive: 

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

## Contact
 - License: MIT
 - Selman Kahya - ([website](http://www.selmanh.com)) - (hey@selmanh.com)
