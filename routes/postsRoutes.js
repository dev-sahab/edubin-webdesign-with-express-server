const express = require('express');
const { singlePostShow } = require('../controllers/postsController');

// routes init
const routes = express.Router();

// routes
routes.get('/blog-single', singlePostShow);

//exports
module.exports = routes;