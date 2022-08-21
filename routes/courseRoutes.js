const express = require('express');
const {singleCourseShow} = require('../controllers/coursesControllers');


// route init
const routes = express.Router();


// routes
routes.get('/courses-single', singleCourseShow);


// export
module.exports = routes;