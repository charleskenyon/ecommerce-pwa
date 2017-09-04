const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	title : String,
  price : String,
  description : [String],
  mainImage: String,
  size: [String],
  colour: String,
  category: String,
  color: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
