
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
  productDetails: [productDetails],
  stock: { type: Number, default: 0 },
  sex : { type: String, enum: ['Homme', 'Femme', 'Unisexe'], default: 'Unisexe' },
});

module.exports = mongoose.model('Produit', produitSchema);
