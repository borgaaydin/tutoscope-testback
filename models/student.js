'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StudentSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    level: {
        type: Number
    }
});

module.exports = mongoose.model('Students', StudentSchema);