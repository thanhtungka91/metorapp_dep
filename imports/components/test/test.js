import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './test.html';
 
class Abc {
  constructor() {
    this.tests = [{
      name: 'the first name'
    }, {
      name: 'the second name'
    }, {
      name: 'the third name'
    }];
  }
}
 // export to template which is used on main html 
export default angular.module('test', [
  angularMeteor
])
  .component('test', {
    templateUrl: 'imports/components/test/test.html',
    controller: Abc
  });