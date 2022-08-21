const path = require('path');

// post single page controller
const singlePostShow = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/blog-single.html'));
}

//export
module.exports = {
    singlePostShow
}