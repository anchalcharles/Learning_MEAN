const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/meanApp', (err) => {
    if (!err) {
        console.log('database connection successfull !');
    } else {
        console.log('Connection error ' + err);
    }
});

module.exports = mongoose;