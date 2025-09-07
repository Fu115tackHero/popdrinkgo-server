const express = require('express');
const app = express();

app.use(express.json());

// Rute dasar untuk menguji server
app.get('/', (req, res) => {
  res.send('Server PopDrinkGo berjalan!');
});

// Mengekspor aplikasi Express sebagai handler Serverless Function
module.exports = app;