const path = require('path');

// single event page controller
const singleEventShow = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/events-single.html'));
}

//export
module.exports = {
    singleEventShow
}