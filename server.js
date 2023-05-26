const express = require('express');
const bodyparser = require('body-parser');
const db_connection = require('./config/db.config');
const { StudentRouter } = require('./routes/student.routes');
const fs = require('fs');
const app = express();

app.use(bodyparser.json());
app.use(StudentRouter);

app.get('/students', (req, res) => {
    const { page = 1, pageSize = 10 } = req.query;
  
      const data = fs.readFileSync('./studentsData.json/studentsData.json');
  
    const students = JSON.parse(data.toString('utf-8'));
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const paginatedStudents = students.slice(startIndex, endIndex)
  
    res.json({
      page,
      pageSize,
      totalStudents: students.length,
      students: paginatedStudents,
    });
  });
  
  
  app.get('/students/filter', (req, res) => {
  const { page = 1, pageSize = 10, filterBy, filterValue } = req.query;
    
  const Data = fs.readFileSync('./studentsData.json/studentsData.json');
  const students = JSON.parse(Data.toString('utf-8'));
  
  const filteredStudents = students.filter(student => {
          return student[filterBy] === filterValue;
  });
      
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  const paginatedStudents = filteredStudents.slice(startIndex, endIndex);
      
  res.json({
      page,
      pageSize,
      totalStudents: filteredStudents.length,
      students: paginatedStudents,
  });
  });



app.listen(3000, async()=>{
    console.log("server listening on port 3000");
    await db_connection();
})