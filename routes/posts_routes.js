const express = require('express');  // Import express PACKAGE
const router = express.Router();  // Create a router object
const postController = require('../controller/posts_controller');  // Import the posts_controller.js file

//Home page route
router.get("/",postController.getAllPosts);  // Define the route for the home page
router.get("/:id",postController.getPostById);  // Define the route for the home page





module.exports = router;  // Export the router object