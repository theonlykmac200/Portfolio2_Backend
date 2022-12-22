//Import Dependencies
const express = require('express');
const cors = require('cors');

// Import JSON files
const products = require("./projects.json")
const about = require("./about.json")

// Create our app object
const app = express();

// Setup middleware
app.use(cors());

// Setup routes

// Home route

app.get("/", (req, res) => {
    res.send("Hello World");
});

// route for grabing the projects from the data file
app.get("/projects", (req, res) => {
    res.json(products);  //send projects via JSON
});

// route for grabing the about from the data file
app.get("/about", (req, res) => {
    res.json(about);  //send about via JSON
});

// make the variable for the port
const port = process.env.PORT || 4000;

// Start the server
app.listen(port, () => {
    console.log(`my fight was awful thanks for asking ${port}`);
});