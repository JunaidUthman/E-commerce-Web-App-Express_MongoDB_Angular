
const mongoose = require('mongoose');

const ligneCommandeSchema = new mongoose.Schema({
  produit: { type: mongoose.Schema.Types.ObjectId, ref: 'Produit', required: true },
  quantite: { type: Number, required: true },
  prixTotal: { type: Number, required: true }
});

module.exports = mongoose.model('LigneCommande', ligneCommandeSchema);
