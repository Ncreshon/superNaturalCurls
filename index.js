const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const Port = process.env.PORT || 4500;
const app = express();

app.use(express.static(path.join(__dirname, '/client')));
app.listen(Port, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log(`listening on ${Port}`);

  }
});
app.get('/styles', (req, res) => {
  res.sendFile(path.join(__dirname, '/client', 'styles.html'));
});
app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, '/client', 'products.html'));
});