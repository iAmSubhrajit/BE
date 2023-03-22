const express = require('express');
const { getAllUserList, createUser, updateUser, deleteUser, getSingleUser, updateUser1 } = require('../controllers/userController');
const router = express.Router();

// http://localhost:3000/user
router.route('/').get(getAllUserList).post(createUser)

router.route('/:id')
    .get(getSingleUser)
    .patch(updateUser)
    .put(updateUser1)
    .delete(deleteUser)


module.exports = router;