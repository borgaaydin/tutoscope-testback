'use strict';

const express = require('express');
const router = express.Router();
const studentList = require("../contollers/studentContoller");

router.get('/', studentList.list_all_students);
router.post('/', studentList.create_a_student);

router.get('/:studentId', studentList.read_a_student);
router.post('/:studentId', studentList.update_a_student);

router.get('/delete/:studentId', studentList.delete_a_student);

module.exports = router;
