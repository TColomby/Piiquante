const express = require('express');

const mongoose = require('mongoose');

const saucesRoutes = require('./routes/sauces')

mongoose.connect('mongodb+srv://Schmoo:ztbfY3WtRF4YrwEz@cluster0.xgzqkkd.mongodb.net/test',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie '))
  .catch(() => console.log('Connexion à MongoDB échouée '));

const app = express();

app.use(express.json()); // permet l'exploitation des body de req

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
}); // gère les header pour les CORS

app.use('/api/sauces', saucesRoutes); // importe le router


module.exports = app; //exporte l'app express