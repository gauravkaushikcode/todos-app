const todo = require("../todo-app");
const app = todo.app;
const Todos = require("../config/index");

// to get all todos
app.get("/todo/", function (req, res) {
  Todos.getTodos();
  res.json({ status: true, todos: Todos.getTodos() });
});

// to get a todo based on id
app.get("/todo/:todoId", function (req, res) {
  res.json({ status: true, todo: Todos.getTodoWithId(req.params.todoId) });
});

// to mark a todo completed/ not completed
app.post("/todo/:todoId/toggle", function (req, res) {
  Todos.toggleTodo(req.params.todoId);
  res.json({ status: true });
});

// to delete a todo
app.delete("/todo/:todoId/delete", function (req, res) {
  Todos.deleteTodo(req.params.todoId);
  res.json({ status: true });
});

// to add a new todo
app.post("/todo/new", function (req, res) {
  res.json({ status: true, todo: Todos.addTodo(req.body.text) });
});
