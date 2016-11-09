import * as angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import { CONFIG_PROVIDERS } from './config';
import { COMPONENT_PROVIDERS } from './components';
import provide from 'angular-provide';

export default provide(angular.module('app', [
    angularUiRouter
  ]),
    ...CONFIG_PROVIDERS,
    ...COMPONENT_PROVIDERS
);
