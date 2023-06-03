const express = require('express');
const router = express.Router();

const studentController = require('../controllers/student.js_controller');

// router.get('/',studentController)

// router.post('/Student', studentController.create);
router.post("/", studentController.student_create);
router.get("/", studentController.student_all);
router.get("/:studentId", studentController.student_details);
router.put("/:studentId", studentController.student_update);
router.delete("/:studentId", studentController.student_delete);



module.exports = router;