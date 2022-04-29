const mongoose = require( 'mongoose' )
const yup = require( 'yup' );
// create a Schema
const ProductSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        maxlength: 20,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
} );

const validateProduct = ( product ) =>
{
    const schema = yup.object().shape( {
        name: yup.string().required(),
        description: yup.string().required().max( 20 ),
        price: yup.number().required().min( 0 ),
        rating: yup.number().required().min( 0 ).max( 5 ),
        image: yup.string().required(),
    } );

    return schema
        .validate( product )
        .then( product => product )
        .catch( ( err ) =>
        {
            return {
                message: err.message,
            };
        } );
}

exports.Product = new mongoose.model( 'Product', ProductSchema );
exports.validateProduct = validateProduct;
