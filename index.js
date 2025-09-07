const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Rute dasar untuk menguji server
app.get('/', (req, res) => {
  res.send('Server PopDrinkGo berjalan!');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});