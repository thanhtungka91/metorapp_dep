import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todosList/todosList';
import test from '../imports/components/test/test';
 
angular.module('metorapp', [
  angularMeteor,
  todosList.name,
  test.name,
]);