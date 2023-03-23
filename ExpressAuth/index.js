const express = require('express')

const app = express()

//.env
require('dotenv').config()

//parse JSON bodies
app.use(express.json())

require('./connectorDB')

const userRouter = require('./src/routes/userRoutes')

app.use('/user', userRouter)



const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Auth server listening on port ${PORT}`);
})
