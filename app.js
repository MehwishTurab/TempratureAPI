const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const tempRoutes = require('./api/routes/temp');
const InfoRoutes = require('./api/routes/info');
const mongoose = require('mongoose');

mongoose.connect('mongodb://mehwish:1234@node-temp-info-shard-00-00-jgoqt.mongodb.net:27017,node-temp-info-shard-00-01-jgoqt.mongodb.net:27017,node-temp-info-shard-00-02-jgoqt.mongodb.net:27017/test?ssl=true&replicaSet=node-temp-info-shard-0&authSource=admin');

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