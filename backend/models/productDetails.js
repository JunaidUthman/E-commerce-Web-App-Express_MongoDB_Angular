
const mongoose = require('mongoose');
const { countDocuments } = require('./card');

const produitDetailsSchema = new mongoose.Schema({
  color: { type: String, required: true },
  size: { type: String, required: true },
  count: { type: Number, default: 0 }
});

module.exports = mongoose.model('ProduitDetails', produitDetailsSchema);
