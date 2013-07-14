'use strict';

describe('Directive: formDirective', function () {
  beforeEach(module('angularjsFormBuilderApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<form-directive></form-directive>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the formDirective directive');
  }));
});
