var router = require('express').Router();
var todosRouter = require('./todos/todos');

// api router will mount other routers
// for all our resources. Each resource directory
// has a resourceRoutes.js file with the router ready to go,
// require them and mount them to their respective routes below

router.use('/todos', todosRouter);

module.exports = router;