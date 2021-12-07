// Requiring fs module
const fs = require("fs");
const path = require("path");
const { nanoid } = require("nanoid");

const getTodos = () => {
  try {
    const data = fs.readFileSync(path.resolve(__dirname, "data.json"));
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

const getTodoWithId = (id) => {
  const todos = getTodos();
  return todos.filter((todo) => todo.id == id);
};

const addTodo = (text) => {
  const todos = getTodos();
  const todo = { id: nanoid(), text: text, completed: false };
  // Adding the todo data to our todos
  todos.push(todo);
  saveTodos(todos);
  return todo;
};

const deleteTodo = (id) => {
  const todos = getTodos();
  const filteredtodos = todos.filter((todo) => todo.id !== id);
  saveTodos(filteredtodos);
};

const toggleTodo = (id) => {
  const todos = getTodos();
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos[i].completed = !todos[i].completed;
    }
  }
  saveTodos(todos);
};

const saveTodos = (todos) => {
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
