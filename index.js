const express = require('express');

let db = require('./client/db.js');

const dotenv = require('dotenv');

const path = require('path');

const bodyparser = require('body-parser');

const https = require('https');

const config = require('./client/config/youtube.js');
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
  const url = 'https://www.googleapis.com/youtube/v3/search';
  const query = `${req.headers.search} natural hair styles`;
  youtubeSearch.youtubeSearch(query);

});


app.get('/products', (req, res) => {
  const query = `${req.headers.search} product reviews`;
  console.log(query)
  youtubeSearch.youtubeSearch(query)
});
