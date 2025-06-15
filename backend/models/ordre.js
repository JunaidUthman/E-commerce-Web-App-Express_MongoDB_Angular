
const mongoose = require('mongoose');

const ordreSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  date: { type: Date, default: Date.now },
  lignes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrdreLine' }],
  statut: { type: String, enum: ['en attente', 'envoyée', 'livrée'], default: 'en attente' }
});

module.exports = mongoose.model('Commande', commandeSchema);
