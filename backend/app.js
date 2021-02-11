const express = require('express');

const app = express();

app.use('/api/posts' ,(req, res, next) => {
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
})

module.exports = app;
