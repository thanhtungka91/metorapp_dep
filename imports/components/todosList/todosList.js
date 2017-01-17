import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todosList.html';
 
class Abc {
  constructor() {
    this.tasks = [{
      text: 'This is task 1'
    }, {
      text: 'This is task 2'
    }, {
      text: 'This is task 3'
    }];
  }
}
 // export to template which is used on main html 
export default angular.module('todos', [
  angularMeteor
])
  .component('todos', {
    templateUrl: 'imports/components/todosList/todosList.html',
    controller: Abc
  });