
const { getProductsData, addProductToData, deleteProductFromData, updateProductdata } = require("../models/productModel")

const getAllProducts = (req, res) => {
    const products = getProductsData()
    res.send(products)
}

const createProducts = (req, res) => {
    const status = addProductToData(req.body)
    if (status) {
        res.send('Product added successfully')
    }
    else {
        res.send('Something went wrong')
    }

}

const updateProduct = (req, res) => {
    const status = updateProductdata(req.params.id, req.body)
    if (status) {
        res.send('Product updated successfully')
    }
    else {
        res.send('Something went wrong')
    }
}

const deleteProduct = (req, res) => {
    const status = deleteProductFromData(req.params.id)
    if (status) {
        res.send('Product deleted successfully')
    }
    else {
        res.send('Something went wrong')
    }
}

module.exports = { getAllProducts, createProducts, updateProduct, deleteProduct }