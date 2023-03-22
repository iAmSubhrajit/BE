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
    inStock: {
        type: Boolean,
        required: true
    }
}, { versionKey: false });

const ProductModel = model('product', productSchema);

module.exports = ProductModel