// Create express app
var express = require("express");
const bodyParser = require('body-parser');
var app = express();

//body parser middleware - enable json handling
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let movieRoute = require('./src/routes/movies');

// Server port
var HTTP_PORT = 3000 
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Hello World!"})
});

// routes
app.use('/movies', movieRoute);

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});
