const path = require('path');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/database');
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.DB || config.mlab);

mongoose.connection.on('connected', () => {
    console.log('DB Connection Established');
});

mongoose.connection.on('error', err => {
    console.log('DB Connection Failed With Error', err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const articleRoutes = require('./routes/article.routes');
app.use('/article', articleRoutes);

app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.listen(port, () => {
    console.log('Server Started On Port', port);
});