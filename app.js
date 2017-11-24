angular
  .module("to-do", [])
  .controller("ToDoController", ToDoController);

function ToDoController() {
  this.tasks = ['Walk the cat', 'Eat second breakfast', ]

  this.createTask = () => {
    this.tasks.push( this.taskName );
    this.taskName = '';
  };

  this.deleteTask = (index) => {
    this.tasks.splice(index, 1);
  };
}
