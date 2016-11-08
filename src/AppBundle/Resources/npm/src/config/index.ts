import provide from 'angular-provide';

import { configUrlRouter } from './router';
import { configState } from './state';

export const CONFIG_PROVIDERS = [
  provide.config(configUrlRouter),
  provide.config(configState)
];
