'use strict';

describe('Controller: StandardPersonnelfileIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var StandardPersonnelfileIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StandardPersonnelfileIndexCtrl = $controller('StandardPersonnelfileIndexCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(StandardPersonnelfileIndexCtrl.awesomeThings.length).toBe(3);
  // });
});
