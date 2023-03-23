const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: [5, 'Please add a valid name for product of minimum length 5'], //custom error message
        maxLength: 30,
        trim: true
    },
    category: {
        type: String,
        required: [true, 'Why no category'],
        // uppercase: true,
        lowercase: true,
        enum: ['mobile', 'appliances', 'laptop', 'tablet'] //strictly equal
    },
    price: {
        type: Number,
        required: true,
        cast: false,
        min: [20000, 'product price must be >= 20000'],
        max: 130000
    },
    colors: {
        type: Schema.Types.Array,
        // validate: (data) => {
        //     console.log(data)
        //     return data.length > 0
        // },
        validate: {
            // validator: (data) => {
            //     return data.length > 1
            // },
            // message: 'colors should be having more than 1 value',
            // message: (DATA) => {
            //     console.log(DATA);
            //     return `validation failed for ${DATA.path}`
            // },
            // isAsync: true ->(to use validator as async) - Depricated now
            validator: async (data) => {
                // return Promise.resolve('data')
                // return Promise.reject(`${data} is not valid`)
                // return await Promise.reject(`${data} is not valid`)
                // return await Promise.resolve(false) //dont pass false in resolve-> it will work as reject

                new Promise((res, rej) => {
                    // res('resolved')
                    rej('error')
                })
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((error) => {
                        console.log(error);
                        return false
                    })

            }

        }
    },
    inStock: {
        type: Boolean,
        required: true
    }
}, { versionKey: false });

const ProductModel = model('product', productSchema);

module.exports = ProductModel