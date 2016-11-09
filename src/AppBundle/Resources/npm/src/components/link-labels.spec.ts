import { testModule } from '../test';
import * as angular from 'angular';
import 'angular-mocks/ngMock';
import ICompileService = angular.ICompileService;
import IRootScopeService = angular.IRootScopeService;
import IAugmentedJQuery = angular.IAugmentedJQuery;
import IScope = angular.IScope;

describe('component', () => {
  let $element: IAugmentedJQuery;
  let $scope: IScope;

  beforeEach(() => {
    angular.mock.module(testModule.name);
    angular.mock.inject(($compile: ICompileService, $rootScope: IRootScopeService) => {
      $element = $compile('<link-label no="100"></link-label>')($scope = $rootScope.$new());
      $scope.$digest();
    });
  });

  it('link-label', () => {
    expect($element.find('a').length).toBe(1);

    let $anchor = $element.find('a');
    expect($anchor.text()).toBe('item 100');
    expect($anchor.attr('href')).toContain('/items/100');
  });
});
