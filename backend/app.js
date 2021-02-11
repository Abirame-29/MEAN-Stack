const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.json());

app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully!'
  })
})

app.get('/api/posts' ,(req, res, next) => {
  const posts = [
    {
      id: 'cbwewif8273',
      title: 'First post from server',
      content: 'Content from the server'
    },
    {
      id: 'fewui84r2f3',
      title: 'Second post from server',
      content: 'Content from the server...'
    }
  ];

  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  });
});

module.exports = app;
