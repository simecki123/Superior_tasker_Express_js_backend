const express = require('express');
const {
    createProject,
    updateProject,
    deleteProject,
    getProjectById,
    findProjectsByUserId,
} = require('../controllers/projectController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);

router.post('/saveProject', createProject);
router.delete('/deleteProject/:id', deleteProject);
router.get('/getProjectById/:id', getProjectById);
router.get('/findProjectsByUserId/:userId', findProjectsByUserId);
router.put('/updateProject/:id', updateProject);

module.exports = router;
