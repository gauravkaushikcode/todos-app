// Import todo-app
// --------------------------------
var todo = require('./server/todo-app');
var app = todo.app;
var config = todo.config;


// Import modules
// --------------------------------
require('./server/todo/index');


// Error page
// --------------------------------
app.use(function (req, res, next) {
    var error = new Error('Page Not Found');
    error.status = 404;
    next(error);
});


// Run app
// --------------------------------
var server = require("http").createServer(app);
server.listen(config.adminPort);
console.info('Webserver started at http://localhost:' + config.adminPort);