const express = require('express')

const router = express.Router();

// http://localhost:8080/users -> base route
router.get('/', (req, res) => {
    res.send('All user List')
})

router.get('/:id', (req, res) => {
    res.send('single user list')
})

module.exports = router;