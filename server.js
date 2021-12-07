// Import todo-app
// --------------------------------
const todo = require('./server/todo-app');
const app = todo.app;
const config = todo.config;


// Import modules
// --------------------------------
require('./server/todo/index');


// Error page
// --------------------------------
app.use(function (req, res, next) {
    const error = new Error('Page Not Found');
    error.status = 404;
    next(error);
});


// Run app
// --------------------------------
const server = require("http").createServer(app);
server.listen(config.adminPort);
console.info('Webserver started at http://localhost:' + config.adminPort);