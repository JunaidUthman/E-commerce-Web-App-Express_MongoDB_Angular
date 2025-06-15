const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password : {type : String , required : true},
  role : { type: String, enum: ['Admin', 'Client'], default: 'Client' },
  phoneNumber: String,
  ordre: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Commande' }],
  card: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }]
});

module.exports = mongoose.model('Client', clientSchema);
