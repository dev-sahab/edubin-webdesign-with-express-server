const express = require('express');
const {singleProduct} = require('../controllers/productsControllers');

// routes init
const routes = express.Router();

// routes
routes.get('/shop-single', singleProduct);

// export
module.exports = routes;