const express = require('express');
const { getProductsController, createProductController } = require('../controllers/productController');

const router = express.Router();

router.route('/')
    .get(getProductsController)
    .post(createProductController)


module.exports = router