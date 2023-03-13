const express = require('express');
const app = express();

//dotenv -> storing configuration in .env file separate from code file
const dotEnv = require('dotenv')
dotEnv.config();

app.use(express.json())

const productRouter = require('./routes/productRoutes')
const userRouter = require('./routes/userRoutes')

const { checkLogInStstus, checkUser } = require('./middleware')

//using productRouter 
app.use('/products', productRouter)
//using userRouter
app.use('/users', userRouter)

// app.use(checkUser)
// app.use(checkLogInStstus)
// express.static --> middleware to server static files(css,js file etc. to FE)

// app.get('/products', (req, res) => {
//     console.log('inside product route');
//     res.send('Products Page -- GET')
// })

// app.post('/products', (req, res) => {
//     res.send('Products Page -- POST')
// })
// app.patch('/products', (req, res) => {
//     res.send('Products Page -- PATCH')
// })

//Using Routes
//product route
// app.route('/products')
//     .get((req, res) => {
//         res.send('Products Page -- GET')
//     })
//     .post((req, res) => {
//         res.send('Products Page -- POST')
//     })
//     .patch((req, res) => {
//         res.send('Products Page -- PATCH')
//     })

// app.route('/products/:id')
//     .get((req, res) => {
//         res.send('Products Page -- GET')
//     })
//     .post((req, res) => {
//         res.send('Products Page -- POST')
//     })
//     .patch((req, res) => {
//         res.send('Products Page -- PATCH')
//     })

//userRoute
// app.route('/users/:id')
//     .get((req, res) => {
//         res.send('Users Page -- GET')
//     })
//     .post((req, res) => {
//         res.send('Users Page -- POST')
//     })
//     .patch((req, res) => {
//         res.send('Users Page -- PATCH')
//     })


app.get('/Profile', checkLogInStstus, (req, res) => {
    console.log('inside profile route');
    res.send('Profile Page')
})
app.get('/orders', checkLogInStstus, (req, res) => {
    console.log('inside orders route');
    res.send('Order Page')
})



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`app running at ${PORT}`);
})

