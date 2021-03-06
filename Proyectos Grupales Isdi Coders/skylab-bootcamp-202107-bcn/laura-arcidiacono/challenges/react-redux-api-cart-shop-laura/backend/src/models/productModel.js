const { model, Schema } = require('mongoose');

const productSchema = Schema({
  name: String,
  author: String,
  price: Number,
  stock: Number,
  img: String
});

module.exports = model('Product', productSchema);
