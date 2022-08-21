const express = require('express');
const { singleEventShow } = require('../controllers/eventsControllers');

// route init
const routes = express.Router();

// routes
routes.get('/events-single', singleEventShow);



// export
module.exports = routes;