import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todosList.html';
import { Tasks } from '../../api/tasks.js';
 
class Abc {
  constructor($scope) {
    $scope.viewModel(this);
    this.helpers({
      tasks() {
        return Tasks.find({});
      }
    })
  }
}
 // export to template which is used on main html 
export default angular.module('todos', [
  angularMeteor
])
  .component('todos', {
    templateUrl: 'imports/components/todosList/todosList.html',
    controller: ['$scope', Abc]
  });
  // o day no add Abc vao todos 
  // con no lam gi minh van chua ro 
