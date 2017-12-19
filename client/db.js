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


const styleSchema = new Schema({
  title: String,
  favorite: Boolean,
  description: String,
  url: String,

});

const productSchema = new Schema({
  title: String,
  favorite: Boolean,
  description: String,
  url: String,

});

const StyleFavs = mongoose.model('Style', styleSchema);

const ProductFavs = mongoose.model('Product', productSchema);

