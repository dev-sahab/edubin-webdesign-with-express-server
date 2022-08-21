const express = require('express');
const { singleTeachersShow } = require('../controllers/teachersControllers');

// routes init
const routes = express.Router();

routes.get('/teacher-single', singleTeachersShow);

//module export
module.exports = routes