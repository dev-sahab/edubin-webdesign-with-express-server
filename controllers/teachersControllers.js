const path = require('path');

// teacher single page controllers
const singleTeachersShow = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/teachers-single.html'));
}

//module export
module.exports = {
    singleTeachersShow
}