import * as angular from 'angular';
import IStateProvider = angular.ui.IStateProvider;

configState.$inject = ['$stateProvider'];
export function configState($stateProvider: IStateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      template: `
        <h2>home</h2>
        <div><a href ui-sref="items({id:1})">items1</a></div>
        <div><a href ui-sref="items({id:2)}">items2</a></div>
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
