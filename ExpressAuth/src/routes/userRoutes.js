const { Router } = require('express');
const { createUser, getUsers, getUser, loginUser, getUserProfile } = require('../controllers/userController');
const { auth, roleBasedAuthorization } = require('../middlewares/authmiddleware');

const router = Router();

router.get('/all', auth, roleBasedAuthorization, getUsers)
router.post('/signup', createUser)
router.post('/login', loginUser)
router.get('/profile', auth, getUserProfile)

router.route('/:id')
    .get(getUser)

module.exports = router