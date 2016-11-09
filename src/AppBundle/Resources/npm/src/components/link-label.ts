import IComponentOptions = angular.IComponentOptions;
import IComponentController = angular.IComponentController;

class LinkLabelComponent implements IComponentController {}

export let LinkLabelComponentOptions: IComponentOptions = {
  bindings: {
    no: '<'
  },
  controller: LinkLabelComponent,
  template: `
    <div>
      <a href ui-sref="items({id: $ctrl.no})">item {{$ctrl.no}}</a>
    </div>
`
};
