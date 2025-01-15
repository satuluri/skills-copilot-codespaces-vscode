// Create a Web Server
// GET /comments - returns a list of comments
// POST /comments - create a new comment
// PUT /comments/:id - update a comment
// DELETE /comments/:id - delete a comment
// The comments should be stored in a file called comments.json
// The comments should have the following structure:
// {
//     "id": 1,
//     "body": "comment body",
//     "postId": 1


const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

app.get('/comments', (req, res) => {
    fs.readFile('comments.json', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
        } else {
            res.send(JSON.parse(data));
        }
    });
}