const mongoose = require('mongoose');

const discuss = mongoose.model('Discuss', {
    name: {
        type: String
    },
    question: {
        type: String
    },
    department: {
        type: String
    }
});

module.exports = discuss;