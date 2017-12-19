const express = require('express');

let db = require('./client/db.js');

const dotenv = require('dotenv');

const path = require('path');

const bodyparser = require('body-parser');

const youtubeSearch = require('./client/youtubeSearch.js');


const Port = process.env.PORT || 4500;
const app = express();

app.use(bodyparser());
app.use(express.static(path.join(__dirname, '/client')));
app.listen(Port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`listening on ${Port}`);
  }
});

app.get('/styles', (req, res) => {
  const query = `${req.headers.search} natural hair styles`;
  youtubeSearch.youtubeSearch(query).then((videos) => {
    res.send(videos.data);
  }).catch((err) => {
    console.error(err);
  });
});


app.get('/products', (req, res) => {
  const query = `${req.headers.search} product reviews`;
  youtubeSearch.youtubeSearch(query).then((videos) => {
    res.send(videos.data);
  }).catch((err) => { console.error(err); });
});

