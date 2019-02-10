"use strict";
function ToDoCtrl() {
    const self = this; // always add when creating controller for reference purposes
    // array of task objects
    self.tasks = [{ task: "walk the dog", completed: true }, { task: "laundry", completed: true }, { task: "grocery store trip", completed: false },
    { task: "pay bills", completed: true }, { task: "sign up for meetup", completed: false }, { task: "finish resume", completed: false }];
    // add function that adds new tasks (as a whole object) to lists
    self.add = function (newTask) {
        self.tasks.push(angular.copy({ task: newTask.task, completed: false }));
    }
    // delete item that splices task objects
    self.delete = function (index) {
        self.tasks.splice(index, 1);
    }
    // function that takes the index of a task and changes its completed value to true
    self.toggleClass = function (index) {
        self.tasks[index].completed = true;
    }
}
angular
    .module("todoApp")
    .controller("ToDoCtrl", ToDoCtrl);