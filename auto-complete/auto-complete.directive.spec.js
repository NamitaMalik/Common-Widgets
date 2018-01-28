describe('Unit testing auto-complete directive', function() {
  beforeEach(module('commonWidgets'));
  var $controller;
  var $compile;
  var $rootScope;
  var $scope;
  var commonService
  beforeEach(module('autoCompleteTemplates'));

  beforeEach(inject(function(_$controller_, _$rootScope_, _$compile_) {
    $controller = _$controller_;
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
  }));

  it('should replace the element with input element', function() {
    var element = $compile("<auto-complete></auto-complete>")($scope);
    $rootScope.$digest();
    expect(element.html()).toContain('Search Country');
  });

});
