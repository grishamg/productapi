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
        .catch( ( err ) =>
        {
            res.status( 500 ).send( `Product not stored in db ${ err }` );
        } )

} );

// Get all the books 
router.get( '/', ( req, res ) =>
{
    Product.find()
        .then( prods => res.send( prods ) )
        .catch( ( err ) =>
        {
            res.status( 500 ).send( "Something went wrong" );
        } )
} )

// get the product by id 
router.get( '/:prodid', async ( req, res ) =>
{
    const prod = await Product.findById( req.params.prodid );
    if ( !prod ) res.status( 404 ).send( "Product not Found" );
    res.send( prod );
} );


// Update the product based on id
router.put( '/:prodId', async ( req, res ) =>
{
    const updatedProd = await Product.findByIdAndUpdate( req.params.prodId, {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        rating: req.body.rating,
    }, { new: true }
    )

    if ( !updatedProd ) res.status( 404 ).send( "book not found" );
    res.send( updatedProd );
} );


//delete a product by id 
router.delete( '/:prodId', async ( req, res ) =>
{
    const prod = await Product.findByIdAndRemove( req.params.prodId );
    if ( !prod ) res.status( 404 ).send( "Book with this ID not found" );
    res.send( prod );
} )

module.exports = router;
