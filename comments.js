//Create complete class of web server with one get endpoint
const express = require('express');
const app = express();
const comments = require('./comments.json');

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

//Run the server with node comments.js
//Open the browser and go to http://localhost:3000/comments to see the comments