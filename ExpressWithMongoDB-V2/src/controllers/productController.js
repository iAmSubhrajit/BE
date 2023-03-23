const ProductModel = require("../models/productModel")

const getProductsController = (req, res) => {
    ProductModel
        .find()
        .then(data => res.send(data))
        .catch(err => res.send({ message: err.message }))
}


const createProductController = (req, res) => {
    ProductModel
        .create(req.body)
        .then((data => {
            // console.log("data", data);
            res.send('Product created successfully')
        }))
        // .catch(err => res.send({ message: err.message }))
        .catch(err => res.send(err))

}

module.exports = {
    getProductsController,
    createProductController
}