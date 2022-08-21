const path = require('path');

// single product controller
const singleProduct = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/shop-single.html'));
}

//export
module.exports = { 
    singleProduct
}