const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017" + "/UserInfo";

mongoose.connect(mongoURI)
    .then(() => console.log('connection with MongoDB successful'))
    .catch(error => console.log('error while connection', error))