'use strict';

describe('Controller: CreateCtrl', function () {

  // load the controller's module
  beforeEach(module('angularjsFormBuilderApp'));

  var CreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateCtrl = $controller('CreateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
