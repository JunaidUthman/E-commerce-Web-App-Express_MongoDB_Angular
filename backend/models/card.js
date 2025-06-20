const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  qu: { type: String, required: true },
  produit : mongoose.Schema.Types.Mixed
});

module.exports = mongoose.model('Card', cardSchema);
