//Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
//Set up body parser to read incoming data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Set up the port
const PORT = 3000;
//