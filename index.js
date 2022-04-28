require( 'dotenv' ).config();
const express = require( 'express' );
const mongoose = require( 'mongoose' );
const app = express();
const port = process.env.PORT || 5000

// connect to mongodb atlas at 
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
