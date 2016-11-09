import provide from 'angular-provide';

import { LinkLabelComponentOptions } from './link-label';

export const COMPONENT_PROVIDERS = [
  provide.component('linkLabel', LinkLabelComponentOptions)
];
