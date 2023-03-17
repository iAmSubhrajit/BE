//Schema --> architecture/structure of a Document
//the keys/proerties in the document which will be receiving by client

//Model: which allows us to do operations on data - CRUD

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    age: Number
}, { versionKey: false })

//1st arg -> Name of the Collection, 2nd arg -> Schema we created
const User = mongoose.model("user", userSchema)  //user collection

module.exports = User;