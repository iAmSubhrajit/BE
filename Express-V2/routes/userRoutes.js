const express = require('express')

const router = express.Router();

const users = require('../users.json')
// http://localhost:8080/users -> base route
router.get('/', (req, res) => {
    res.send(users)
})

router.get('/:id', (req, res) => {
    const user = users.find((u) => u.id === +req.params.id)
    if (user) {
        res.send(user)
    }
    else {
        res.send({})
    }
})

module.exports = router;