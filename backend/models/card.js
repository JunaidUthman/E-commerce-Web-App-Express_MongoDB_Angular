const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  qu: { type: String, required: true },
  produit : [{type : mongoose.Schema.Types.ObjectId, ref: 'Produit'}],
  dateExpiration : {type : Date, default: Date.now},
});

module.exports = mongoose.model('Card', cardSchema);
