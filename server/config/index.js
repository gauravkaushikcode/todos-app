// Requiring fs module
const fs = require("fs");
const path = require("path");
const { nanoid } = require("nanoid");

var getTodos = () => {
  try {
    var data = fs.readFileSync(path.resolve(__dirname, "data.json"));
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

var getTodoWithId = (id) => {
  var todos = getTodos();
  return todos.filter((todo) => todo.id == id);
};

var addTodo = (text) => {
  var todos = getTodos();
  var todo = { id: nanoid(), text: text, completed: false };
  // Adding the todo data to our todos
  todos.push(todo);
  saveTodos(todos);
  return todo;
};

var deleteTodo = (id) => {
  const todos = getTodos();
  var filteredtodos = todos.filter((todo) => todo.id !== id);
  saveTodos(filteredtodos);
};

var toggleTodo = (id) => {
  const todos = getTodos();
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos[i].completed = !todos[i].completed;
    }
  }
  saveTodos(todos);
};

var saveTodos = (todos) => {
  // Writing to our JSON file
  fs.writeFile(
    path.resolve(__dirname, "data.json"),
    JSON.stringify(todos),
    (err) => {
      // Error checking
      if (err) throw err;
      console.log("New data added");
    },
  );
};

module.exports = {
  getTodos,
  getTodoWithId,
  addTodo,
  deleteTodo,
  toggleTodo,
};
