const Student = require('../models/student');
const jwt = require('jsonwebtoken');


// Get All students
const student_all = async (req, res) => {
  try {
      const student = await Student.find();
      res.json(student);
    } catch (error) {
      res.json({ message: error });
    }
};

// Single 
const student_details = async (req, res) => {
  try {
      const student = await Student.findById(req.params.studentId);
      res.json(student);
    } catch (error) {
      res.json({ message: error });
    }
};

// Add New product
const student_create = async (req, res) => {
// console.log(req.body)
  const student = new Student({
      name: req.body.name,
      class: req.body.class,
      subject: req.body.subject
    });

  console.log(student);
    try {
      const savedstudent = await student.save();
      res.send(savedstudent);
    } catch (error) {
      res.status(400).send(error);
    }
};

// Update 
const student_update = async (req, res) => {
  try {
      const student = {
        name: req.body.name,
        class: req.body.class,
        subject: req.body.subject
      };
  
      const updatedStudent = await Student.findByIdAndUpdate(
        { _id: req.params.studentId },
        student
      );
      res.json(updatedStudent);
    } catch (error) {
      res.json({ message: error });
    }
};

// Delete 
const student_delete = async (req, res) => {
  try {
      const removeStudent = await Student.findByIdAndDelete(req.params.studentId);
      res.json(removeStudent);
    } catch (error) {
      res.json({ message: error });
    }
};

module.exports = {
  student_all, 
  student_details, 
  student_create, 
  student_update, 
  student_delete
}