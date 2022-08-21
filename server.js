// module import
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const { urlencoded } = require('body-parser');
const pageRoutes = require('./routes/pageRoutes');
const courseRoutes = require('./routes/courseRoutes');
const eventsRoutes = require('./routes/eventsRoutes');
const teachersRoutes = require('./routes/teachersRoutes');
const postsRoutes = require('./routes/postsRoutes');
const productsRoutes = require('./routes/productsRoutes');


// express init
const app = express();

// data manage
app.use(express.json());
app.use(urlencoded({extended : false}));

// environment variable
dotenv.config();
const PORT = process.env.PORT || 4000;


// static folder
app.use('/public', express.static('public'));

//routes
app.use('/courses', courseRoutes);
app.use('/events', eventsRoutes);
app.use('/teachers', teachersRoutes);
app.use('/posts', postsRoutes);
app.use('/products', productsRoutes);
app.use(pageRoutes);



// server listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgGreen.black);
})