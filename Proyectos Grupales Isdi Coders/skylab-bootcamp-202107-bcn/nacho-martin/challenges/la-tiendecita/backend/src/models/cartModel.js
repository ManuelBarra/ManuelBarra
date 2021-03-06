const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  user: String,
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      amount: Number,
      types: String
    }
  ],
  total: Number
});

module.exports = mongoose.model('Cart', cartSchema);
