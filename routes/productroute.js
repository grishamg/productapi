const express = require( 'express' );
const product = require( '../models/product' );
const router = express.Router();
const Product = require( '../models/product' )

// create a post route for creating a new product
router.post( '/', ( req, res ) =>
{
    let product = new Product(
        {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
            rating: req.body.rating

        }
    );

    product.save().then( prod =>
    {
        res.send( prod );
    } ).catch( err =>
    {
        res.status( 500 ).send( "Product not stored in db" );
    } )



} );

module.exports = router;
