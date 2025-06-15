const mongoose = require('mongoose');

const verificationTokenSchema = new mongoose.Schema({
    client : {type : mongoose.Schema.Types.ObjectId , ref : 'Client' , required : true},
    token : {type : String , required : true},
    createdAt : {type : Date , default : Date.now , expires : 3600}
})


module.exports = mongoose.mpdel('VerificationToken', verificationTokenSchema);