
const express = require('express');  // Import express PACKAGE     
const mongoose = require('mongoose');  // Import mongoose PACKAGE
const bodyParser = require('body-parser');  // Import body-parser PACKAGE 
const dotenv = require('dotenv').config(); // Import dotenv PACKAGE 

const app = express();  // Create an express app

//----MIDDLEWARE---- is a function that has access to the request and response objects
app.use(bodyParser.json());  // Use body-parser middleware for JSON data
app.use(bodyParser.urlencoded({ extended: true }));  // Use body-parser middleware for URL encoded data

//----MongoDB Connection----
mongoose.connect(process.env.DB_CONNECTION);  // Connect to MongoDB 
const db = mongoose.connection;  // Create a connection to the database
db.on("error",(error)=>console.error(error));  // Log an error if there is one
db.once("open",()=>console.log("Connected to database"));  // Log a message when connected to the database


//----ROUTES----
const postsRoutes = require('./routes/posts_routes');  // Import the posts_routes.js file
app.use('/posts',postsRoutes);  // Use the posts_routes.js file for the /posts route

//Home page route
app.get('/',(req,res)=>{  // Define the route for the home page
    res.send("Welcome to the home page");  // Send a response to the client
} );

const port=process.env.PORT;  // Set the port number
app.listen(port,()=>console.log(`Server is running on http://localhost:${port}`));  // Listen on the port number 

    
    



