const { Router } = require('express');
const { createUser, getUsers, getUser, loginUser, getUserProfile } = require('../controllers/userController');

const router = Router();

router.get('/', getUsers)
router.post('/signup', createUser)
router.post('/login', loginUser)
router.get('/profile', getUserProfile)

router.route('/:id')
    .get(getUser)

module.exports = router