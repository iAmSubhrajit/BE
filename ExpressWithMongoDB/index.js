const express = require('express');

const app = express();

const dotenv = require('dotenv')
dotenv.config();

//json to JS obj
app.use(express.json())

//connect DB with NODE
require('./connectDb')

const userRouter = require('./src/routes/userRoutes')
app.use('/users', userRouter)

const playerRouter = require('./src/routes/playerRoute')
app.use('/players', playerRouter)






const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});