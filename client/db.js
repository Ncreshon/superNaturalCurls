const mongoose = require('mongoose');

mongoose.connect('mongodb://Nicole:04250225@ds161426.mlab.com:61426/supernaturalcurls');

const Schema = mongoose.Schema;

const db = mongoose.connection;

db.on('error', () => {
  console.error('connection error');
});

db.once('open', () => {
  console.log('connection open');
});

const favoriteSchema = new Schema({
  title: String,
  favorite: Boolean,
  description: String,
  url: String,

});


const Favorite = mongoose.model('Favorite', favoriteSchema);

// module.exports.Favorite = Favorite;