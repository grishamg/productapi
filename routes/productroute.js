const express = require( 'express' );
const router = express.Router();
const { Product, validateProduct } = require( '../models/product' )

// create a post route for creating a new product
router.post( '/', async ( req, res ) =>
{
    const error = await validateProduct( req.body );
    if ( error.message ) res.status( 400 ).send( error.message );
    product = new Product(
        {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
            rating: req.body.rating
        }
    );

    product
        .save()
        .then( ( prod ) =>
        {
            res.send( prod );
        } )
        .catch( err =>
        {
            res.status( 500 ).send( "Product not stored in db" );
        } )

} );

module.exports = router;
