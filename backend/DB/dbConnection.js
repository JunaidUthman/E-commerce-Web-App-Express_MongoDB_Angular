const mongoose = require('mongoose');

const connection = async ()=>{ // connect() est par defaut singleton , pas la peine de le faire
    await mongoose.connect('mongodb://localhost:27017/e-commerceDB' , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("connected to the database : e-commerceDB ")
    }).catch((err)=>{
        console.log('Erreur de connexion à MongoDB : '+err) 
    })
}

module.exports = connection;