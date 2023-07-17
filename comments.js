//Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const cors = require('cors');
// const { v4: uuidv4 } = require('uuid');

// app.use(express.json());
app.use(bodyParser.json())
app.use(cors());

// const comments = [
//     {
//         id: uuidv4(),
//         username: 'Todd',
//         comment: 'lol that is so funny!'
//     },
//     {
//         id: uuidv4(),
//         username: 'Skyler',
//         comment: 'I like to go birdwatching with my dog'
//     },
//     {
//         id: uuidv4(),
//         username: 'Sk8erBoi',
//         comment: 'Plz delete your account, Todd'
//     },
//     {
//         id: uuidv4(),
//         username: 'onlysayswoof',
//         comment: 'woof woof woof'
//     }
// ]

// app.get('/comments', (req, res) => {
//     console.log(comments)
//     res.send(comments)
// })

// app.post('/comments', (req, res) => {
//     console.log(req.body)
//     const newComment = {
//         id: uuidv4(),
//         username: req.body.username,
//         comment: req.body.comment
//     }
//     comments.push(newComment)
//     res.send(newComment)
// })

// app.get('/comments/:id', (req, res) => {
//     const { id } = req.params;
//     const foundComment = comments.find((comment) => comment.id === id);
//     res.send(foundComment);
// });

// app.patch('/comments/:id', (req, res) => {
//     const { id } = req.params;
//     const { username, comment } = req.body;
//     const foundComment = comments.find((comment) => comment.id === id);
//     if (username) foundComment.username = username;
//     if (comment) foundComment.comment = comment;
//     res.send(foundComment);
// });

// app.delete('/comments/:id', (req, res) => {
//     const { id } = req.params;
//     const foundComment = comments.find((comment) => comment.id === id);
//     comments =
