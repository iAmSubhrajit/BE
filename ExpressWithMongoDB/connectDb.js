const mongoose = require('mongoose')

//used to connect our Node server with mongodb
//connect method returns promise
mongoose.connect("mongodb://localhost:27017/UserData")
    .then(() => {
        console.log("Database connection successful");
    })
    .catch((err) => {
        console.log(`Error: ${err.message}`);
    })