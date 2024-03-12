const express = require('express');
const router = express.Router();
const {
  addTask,
  getAllTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../controller/Task');

router.post('/addTask', addTask);
router.get('/getAllTask', getAllTask);
router.get('/getTaskById', getTaskById);
router.put('/updateTaskById', updateTask);
router.delete('/deleteTaskById', deleteTask);

module.exports = router;
