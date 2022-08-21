const path = require('path');

// homepage controller
const homeShow = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
}

// homepage 2 controller
const home2Show = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index-2.html'));
}

// homepage 3 controller
const home3Show = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index-3.html'));
}

// homepage 4 controller
const home4Show = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index-4.html'));
}

// about page controller
const aboutShow = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/about.html'));
}

// gallery page controller
const galleryShow = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/gallery.html'));
}

// policy page controller
const policyShow = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/policy.html'));
}

// faq page controller
const faqShow = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/faq.html'));
}

// course page controller
const courseShow = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/courses.html'));
}

// event page controller
const eventsShow = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/events.html'));
}

// event page 2 controller
const events2Show = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/events-2.html'));
}

// teachers page controller
const teachersShow = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/teachers.html'));
}

// teachers page 2 controller
const teachers2Show = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/teachers-2.html'));
}

// blog page controller
const blogShow = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/blog.html'));
}

// shop page controller
const shopShow = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/shop.html'));
}

// contact page controller
const contactShow = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/contact.html'));
}

// contact page 2 controller
const contact2Show = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/contact-2.html'));
}


// contact page 2 controller
const registerShow = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/register.html'));
}


//module export
module.exports = {
    homeShow, home2Show, home3Show, home4Show,
    aboutShow, galleryShow, policyShow, faqShow, courseShow, eventsShow, events2Show,
    teachersShow, teachers2Show, blogShow, shopShow, contactShow, contact2Show, registerShow
}