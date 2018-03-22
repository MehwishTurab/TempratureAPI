const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const tempRoutes = require('./api/routes/temp');
const InfoRoutes = require('./api/routes/info');
const mongoose = require('mongoose');

var mongoURI;

mongoose.connection.on("open", function(ref) {
  console.log("Connected to mongo server.");
});

mongoose.connection.on("error", function(err) {
  console.log("Could not connect to mongo server!");
});

mongoURI = "mongodb://localhost:27017/IoT";

connection = mongoose.connect(mongoURI);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/temp',tempRoutes);
app.use('/info',InfoRoutes);

app.use((req,res,next) => {
    const error = new Error('Not found');
    error.status = 404;
});


module.exports = app;