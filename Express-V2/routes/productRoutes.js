const express = require('express');

const router = express.Router();

// router.use(express.json())

const products = [
    {
        id: 1,
        name: 'Oneplus 7',
        category: 'mobile',
        price: 33000,
        color: 'Black'
    },
    {
        id: 2,
        name: 'Nothing 1',
        category: 'mobile',
        price: 33000,
        color: 'Black'
    },
    {
        id: 3,
        name: 'Iphone 14',
        category: 'mobile',
        price: 98000,
        color: 'White'
    },
    {
        id: 4,
        name: 'Galaxy S23',
        category: 'mobile',
        price: 86000,
        color: 'Black'
    },
    {
        id: 5,
        name: 'HP Pavillion 15',
        category: 'laptop',
        price: 55000,
        color: 'silver'
    },
    {
        id: 6,
        name: 'Fridge',
        category: 'appliance',
        price: 25000,
        color: 'Dark-gray'
    }
]

// http://localhost:8080/products => base routes
// router.get('/', (req, res) => {
//     res.send(products)
// })
// router.post('/', (req, res) => {
//     products.push(req.body)
//     res.send(products)
// })

//more optimization bcz BOTH have same PATH
router.route('/')
    .get((req, res) => {
        res.send(products)
    })
    .post((req, res) => {
        products.push(req.body)
        res.send(products)
    })







router.get('/mobile', (req, res) => {
    res.send('All mobile List')
})

router.get('/cloth', (req, res) => {
    res.send('Cloths List')
})

module.exports = router;