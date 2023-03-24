const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: [6, 'minimum length should be 6 for name'],
        unique: true
    },
    email: {
        type: String,
        required: true,
        minLength: [8, 'email is shorter than the minimum allowed length(8)'],
        validate: {
            validator: (value) => {
                return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
            },
            message: (props) => `${props.value} is not a valid email`
        },
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        // maxLength: 15
    },
    mobile: {
        type: Number,
        required: [true, 'user mobile number required'],
        minLength: 10,
        maxLength: 10
    },
    batch: {
        type: String,
        required: true,
        enum: {
            values: ['ursa', 'juno'],
            message: (props) => `${props.value} is not supported batch`
        }
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin', 'superAdmin']
    }
}, { versionKey: false })

const UserModel = model('user', userSchema)

module.exports = UserModel