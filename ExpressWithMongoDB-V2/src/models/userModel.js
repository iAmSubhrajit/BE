// const mongoose = require('mongoose')
// const Schema = mongoose.Schema;
const { Schema, model } = require('mongoose')

const paginate = require('mongoose-paginate-v2')

const userSchema = new Schema({
    name: Schema.Types.String,
    age: Schema.Types.Number,
    email: Schema.Types.String,
    password: Schema.Types.String,
    student: Schema.Types.Boolean
}, { versionKey: false })

//for pagination
userSchema.plugin(paginate) 

const userModel = model('user', userSchema);

module.exports = userModel;