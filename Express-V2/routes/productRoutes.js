const express = require('express');
const { getAllProducts,
    createProducts,
    updateProduct,
    deleteProduct } = require('../controllers/productController');

const router = express.Router();

// router.use(express.json())



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
    .get(getAllProducts)
    .post(createProducts)

router.route('/:id')
    .patch(updateProduct)
    .delete(deleteProduct)


router.get('/mobile', (req, res) => {
    res.send('All mobile List')
})

router.get('/cloth', (req, res) => {
    res.send('Cloths List')
})

module.exports = router;