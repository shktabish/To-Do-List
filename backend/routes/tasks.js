const express = require('express');
const router = express.Router();
const {getAllTasks, createTask, getTask, updateTask, deleteTask}  = require('../controllers/tasksController')

router.route('/')
    .get(getAllTasks)
    .post(createTask);

router.route('/:id')
    .get(getTask)
    .patch(updateTask)
    .delete(deleteTask);

module.exports = router;

//2 ways
//1) router.get('/', () => {}), same for post, put, delete etc, (have to write separate for each)
//2) router.route('/').get(()=>{}).post and so on (we can chain them)