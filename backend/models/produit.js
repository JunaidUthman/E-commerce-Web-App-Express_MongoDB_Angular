
const mongoose = require('mongoose');
const productDetails = require('./productDetails').schema;

const produitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  stock: Number,
  rating : Number,
  image: {type : String , required: true},
  salesCount: { type: Number, default: 0 },
  productDetails: [productDetails]
});

module.exports = mongoose.model('Produit', produitSchema);
