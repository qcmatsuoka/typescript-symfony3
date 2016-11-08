import { UrlRouterProvider } from 'angular-ui-router';

configUrlRouter.$inject = ['$urlRouterProvider'];
export function configUrlRouter ($urlRouterProvider: UrlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
}
