const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    about: {
        type: String,
        required: false,
        minlength: 30,
        default: null,
    },
    productImage: {
        type: Buffer,
        required: false,
    },
    originalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
    discount: {
        type: Number,
        requred: false,
        default: 0,
    },
    rating: {
        1: {
            type: String,
            default: 0,
        },
        2: {
            type: String,
            default: 0,
        },
        3: {
            type: String,
            default: 0,
        },
        4: {
            type: String,
            default: 0,
        },
        5: {
            type: String,
            default: 0,
        },
    },
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            },
        },
    ],
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product };
