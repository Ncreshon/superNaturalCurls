const express = require('express');

const db = require('./client/db.js');

const dotenv = require('dotenv');

const path = require('path');

var Promise = require("bluebird");

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

app.post('/favorite', (req, res) => {
  const video = req.body.video;
  const entry = {
    title: video.snippet.title,
    rating: 0,
    urlId: video.id.videoId,
    image: video.snippet.thumbnails.default.url,
  };
  db.saveFav(entry);
  res.send('favorited');
});

app.post('/unlike', (req, res) => {
  const video = req.body.video;
  db.unlike({ urlId: video.id.videoId });
  res.send('deleted');
});
app.post('/upvote', (req, res) => {
  const id = { urlId: req.body.video.id.videoId };
  db.upVote(id);
  res.send('vote counted');
});
app.post('/downvote', (req, res) => {
  const id = { urlId: req.body.video.id.videoId };
  db.downVote(id);
  res.send('vote counted');
});
app.get('/rated', (req, res) => {

    db.rating().then(value => res.send(value)).catch(err => console.error(err, 'error'))
  

});
