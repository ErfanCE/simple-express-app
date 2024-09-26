const { join } = require('node:path');
const express = require('express');

const app = express();
const host = '127.0.0.1';
const port = 8000;

// Root Route
app.get('/', (req, res) => {
  res.status(200).send('hello world');
});

// /home Route
app.get('/home', (req, res) => {
  res.status(200).send('<h1>home page</h1>');
});

app.get('/login-bg.jpg', (req, res) => {
  res.status(200).sendFile(join(__dirname, './login-bg.jpg'));
});

app.get('/login', (req, res) => {
  res.status(200).sendFile(join(__dirname, './index.html'));
});

app.get('/style.css', (req, res) => {
  res.status(200).sendFile(join(__dirname, './style.css'));
});

app.listen(port, host, () => {
  console.info(`Listening on ${host}:${port} ...`);
});
