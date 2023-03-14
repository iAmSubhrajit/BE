const fs = require('fs');

const readAndParseDataFromFile = () => {
    const data = fs.readFileSync('./data/products.json')
    const products = JSON.parse(data)
    return products
}
const getProductsData = () => {
    const { productList } = readAndParseDataFromFile()
    return productList;
}

const addProductToData = (product) => {
    const products = readAndParseDataFromFile()
    products.productList.push(product)
    try {
        fs.writeFileSync('./data/products.json', JSON.stringify(products, '', 3))
        return true
    } catch (error) {
        console.log(error.message);
        return false
    }
}

const updateProductdata = (id, data) => {
    const products = readAndParseDataFromFile()
    const productIndex = products.productList.findIndex((el) => el.id === +id)
    if (productIndex !== -1) {
        products.productList[productIndex] = { ...products.productList[productIndex], ...data }
        try {
            fs.writeFileSync('./data/products.json', JSON.stringify(products, '', 3))
            return true
        } catch (error) {
            console.log(error.message);
            return false
        }
    }
}

const deleteProductFromData = (id) => {
    const products = readAndParseDataFromFile()
    const productIndex = products.productList.findIndex((prod) => prod.id === +id)
    if (productIndex !== -1) {
        products.productList.splice(productIndex, 1)
        try {
            fs.writeFileSync('./data/products.json', JSON.stringify(products, '', 3))
            return true
        } catch (error) {
            console.log(error.message);
            return false
        }
    }
}

module.exports = { getProductsData, addProductToData, updateProductdata, deleteProductFromData }
