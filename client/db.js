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
  rating: Number,
  urlId: String,
  image: String,

});


const Favorite = mongoose.model('Favorite', favoriteSchema);

const saveFav = (obj) => {
  const fav = new Favorite(obj);
  fav.save(err => console.error(err));
};

const unlike = (obj) => {
  Favorite.remove(obj, err => console.error(err));
};

const upVote = (obj) => {
  Favorite.update(obj, { $inc: { rating: 1 } }, err => {
    console.error(err)
  });
}


module.exports.Favorite = Favorite;
module.exports.saveFav = saveFav;
module.exports.unlike = unlike;
module.exports.upVote = upVote;
