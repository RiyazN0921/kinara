const mongoose = require('mongoose');

const {Schema} = require('mongoose');

const Studentschema = new Schema({
    id:{
        type: Number
    },
    name:{
        type: String
    },
    totalMarks:{
        type: Number
    }
})

const Student = mongoose.model('Student', Studentschema);

module.exports = Student;