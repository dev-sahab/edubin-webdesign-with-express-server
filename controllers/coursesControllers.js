const path = require('path');

// course single page controllers
const singleCourseShow = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/courses-single.html'));
}


// export
module.exports = {
    singleCourseShow
}