const express = require('express');
const {
    findByProjectId,
    findByUserId,
    createTask,
    updateTask,
    deleteTask,
    findTaskById,
} = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);

router.post('/saveTask/', createTask);
router.delete('/deleteTask/:id', deleteTask);
router.get('/findTaskById/:id', findTaskById);
router.get('/findByProjectId/:projectId', findByProjectId);
router.get('/findByUserId/:userId', findByUserId);
router.put('/updateTask/:id', updateTask);

module.exports = router;
