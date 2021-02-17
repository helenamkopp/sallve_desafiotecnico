const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());


// Primeira rota
app.use('/api', require('./src/routes'))

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err))

  requireDir('./src/models');
app.listen(3001);