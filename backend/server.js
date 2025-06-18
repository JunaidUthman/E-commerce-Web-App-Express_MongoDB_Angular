const cors = require('cors')
const express = require('express');
const dbConnection = require('./DB/dbConnection');
const clientRoutes = require('./routes/clientRoutes');

const app = express();
app.use(cors());
app.use(express.json());
dbConnection();

app.use('/', clientRoutes);

app.get('/test', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
})

app.listen(3000 , ()=>{
    console.log("the servere is listening")
})
