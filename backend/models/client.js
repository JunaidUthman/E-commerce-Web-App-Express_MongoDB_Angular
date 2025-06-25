const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  fullName: { type: String},
  email: { type: String, required: true, unique: true },
  password : {type : String , required : true},
  role : { type: String, enum: ['admin', 'client'], default: 'client' },
  isVerified: { type: Boolean, default: false },
  phoneNumber: String,
  ordre: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Commande' }],
  card: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }]
});

module.exports = mongoose.model('Client', clientSchema);
