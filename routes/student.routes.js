const express = require('express');

const StudentController = require('../controllers/studentlist');

const StudentRouter = express.Router();

StudentRouter.post('/Details', StudentController.StudentDetails);
StudentRouter.get('/getDetails', StudentController.getStudentDetails)

module.exports ={
    StudentRouter,
}