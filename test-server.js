const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});


app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('/*\w', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});