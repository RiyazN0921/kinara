const {response} = require('express');
const Student = require('../modules/student.module');
const fs = require('fs');

const StudentDetails = async (req,res)=>{
    const studentList = req.body;
    const response = await Student.create(studentList);
    res.json({
        message: response
    })
}

const getStudentDetails = async (req,res)=>{
    const response = await Student.find();
    res.json({
        message: response
    })

}





module.exports = {
    StudentDetails,
    getStudentDetails
};