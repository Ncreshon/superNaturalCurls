const express = require('express');

var db = require('./client/db.js');

const dotenv = require('dotenv');

const path = require('path');

const bodyparser = require('body-parser');

const http = require('http');

const config = require('./client/config/youtube.js');

const Port = process.env.PORT || 4500;
const app = express();

app.use(bodyparser());
app.use(express.static(path.join(__dirname, '/client')));
app.listen(Port, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log(`listening on ${Port}`);
2
  }
});

app.get('/styles', (req, res) => {
  const query = `${req.headers.search} natural hair styles`;
  console.log(query);
  // http.get({
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   params: {
  //     part: 'snippet',
  //     key: config.window.YOUTUBE_API_KEY,
  //     q: query,
  //     maxResults: 10,
  //   }
  // }).then(function successCallback(videos) {
  //   console.log(videos.data.items);
  // }, function errorCallback(videos) {
  //   console.error(videos);
  // });
});
app.get('/products', (req, res) => {
  const query = `${req.headers.search} product reviews`;
  console.log(query);
});