const express = require('express');
const app = express();

const { checkLogInStstus, checkUser } = require('./middleware')

app.use(checkUser)
// app.use(checkLogInStstus)
// express.static --> middleware to server static files(css,js file etc. to FE)

app.get('/products', (req, res) => {
    console.log('inside product route');
    res.send('Products Page')
})


app.get('/Profile', checkLogInStstus, (req, res) => {
    console.log('inside profile route');
    res.send('Profile Page')
})
app.get('/orders', checkLogInStstus, (req, res) => {
    console.log('inside orders route');
    res.send('Order Page')
})

app.listen(8080, () => {
    console.log('app running at 8080');
})

