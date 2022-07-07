require( 'dotenv' ).config();
const express = require( 'express' );
const mongoose = require( 'mongoose' );
const app = express();
const cors = require( 'cors' );
const port = process.env.PORT || 5000;
const productRoute = require( './routes/productroute' )

// middlewares
app.use( cors );
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) ); // data can have arrays as well not only strings
// connect to mongodb atlas at


//apis :
app.use( '/api/product', productRoute );
// app.use( function ( req, res, next )
// {
//     res.header( "Access-Control-Allow-Origin", '/api/product' );
//     res.header( "Access-Control-Allow-Headers" );
//     next();
// } )


mongoose.connect( process.env.MONGODB_URL, { useNewUrlParser: true } ).then( () =>
{
    console.log( "Connected in the MongoDB Database" )
} ).catch( err =>
{
    console.log( "Something wrong happened", err );
} )

// start database
app.listen( port, () =>
{
    console.log( `Server started at port ${ port }` )
} )
