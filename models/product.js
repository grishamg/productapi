const mongoose = require( 'mongoose' )

// create a Schema
const ProductSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    rating: {
        type: Number
    }
} );

module.exports = new mongoose.model( 'Product', ProductSchema );
