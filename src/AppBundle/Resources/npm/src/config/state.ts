import * as angular from 'angular';
import IStateProvider = angular.ui.IStateProvider;

configState.$inject = ['$stateProvider'];
export function configState($stateProvider: IStateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      template: `
        <h2>home</h2>
        <link-label no="1"></link-label>
        <link-label no="2"></link-label>
      `
    })
    .state('items', {
      url: '/items/{id:int}',
      template: `
        <h2>items {{$ctrl.id}}</h2>
        <div><a href ui-sref="home">back to home</a></div>
      `,
      resolve: {
        id: ['$stateParams', $stateParams => $stateParams.id]
      },
      controller: ['id', function (id) {
        this.id = id;
      }],
      controllerAs: '$ctrl'
    })
  ;
}
