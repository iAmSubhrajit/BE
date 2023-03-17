const express = require('express');
const { getAllUsers,
    createUser,
    getUserByUserName,
    deleteUserByUserName,
    updateUserByID } = require('../controllers/userController');

const router = express.Router();

// http://localhost:8080/users
router.route('/')
    .get(getAllUsers)
    .post(createUser)


router.route("/:username")
    .get(getUserByUserName)
    .delete(deleteUserByUserName)

router.route('/:id')
    .patch(updateUserByID)

module.exports = router;