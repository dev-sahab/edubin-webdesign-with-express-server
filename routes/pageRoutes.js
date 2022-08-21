const express = require('express');

// Page Controller module import 
const {homeShow, home2Show, home3Show, home4Show, aboutShow, galleryShow, policyShow, faqShow, courseShow, eventsShow, events2Show, teachersShow, teachers2Show, blogShow, shopShow, contactShow, contact2Show, registerShow} = require('../controllers/pageControllers');

// route init
const routes = express.Router();

// routes
routes.get('/', homeShow);
routes.get('/home-2', home2Show);
routes.get('/home-3', home3Show);
routes.get('/home-4', home4Show);
routes.get('/about', aboutShow);
routes.get('/gallery', galleryShow);
routes.get('/policy', policyShow);
routes.get('/faq', faqShow);
routes.get('/courses', courseShow);
routes.get('/events', eventsShow);
routes.get('/events-2', events2Show);
routes.get('/teachers', teachersShow);
routes.get('/teachers-2', teachers2Show);
routes.get('/blog', blogShow);
routes.get('/shop', shopShow);
routes.get('/contact', contactShow);
routes.get('/contact-2', contact2Show);
routes.get('/register', registerShow);



// export
module.exports = routes;