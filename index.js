const express = require( 'express' );
const mongoose = require( 'mongoose' );
const app = express();
const port = process.env.PORT || 5000

// connect to mongodb atlas at 
mongoose.connect( "mongodb+srv://grishamgarg:<myfirstapi>@cluster0.jfmai.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" );

app.listen( port, () =>
{
    console.log( `Server started at port ${ port }` )
} )
