const express = require('express');
const {
    register,
    login,
    getUserById,
    deleteUser,
    updateUser,
} = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/user/getUserById/:id', authMiddleware, getUserById);
router.delete('/user/delete/:id', authMiddleware, deleteUser);
router.put('/user/update/:id', authMiddleware, updateUser);

module.exports = router;
