
const mongoose = require('mongoose');

const produitSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prix: { type: Number, required: true },
  description: String,
  stock: Number
});

module.exports = mongoose.model('Produit', produitSchema);
