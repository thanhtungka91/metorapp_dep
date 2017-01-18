import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todosList.html';
import { Tasks } from '../../api/tasks.js';
 
class Abc {
  constructor($scope) {
    $scope.viewModel(this);
    // cai nay duoc su dung trong view?
    this.hideCompleted = false;

    this.helpers({
      tasks() {
        const selector = {};
        console.log("how can i debug app");
        debugger
        // If hide completed is checked, filter tasks
        if (this.getReactively('hideCompleted')) {
          console.log("hereerere");
          selector.checked = {
            $ne: true
          };
        }
        return Tasks.find({checked:{$ne: true}},{
          sort: {
            createdAt: -1
          }
        });
      }
    })
  }
  // add new task 
  addTask(newTask) {
    // Insert a task into the collection
    Tasks.insert({
      text: newTask,
      name: 'hardtext',
      createdAt: new Date
    });
    // Clear form
    this.newTask = '';
  }
// update new task which is add checkbox?
  setChecked(task) {
      // Set the checked property to the opposite of its current value
    Tasks.update(task._id, {
      $set: {
        checked: !task.checked
      },
    });
  }

// delete the task 
  removeTask(task) {
    Tasks.remove(task._id);
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
