const express = require('express');
const app = express();

const dotenv = require('dotenv')
dotenv.config();

//parse JSON bodies
app.use(express.json())

const userRoute = require('./src/routes/userRoutes')
const productRoute = require('./src/routes/productRoutes')
app.use('/user', userRoute)
app.use('/product', productRoute)

//mongoDB connection
require('./connectDB')



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});