const express = require('express');
const app = express();
const port = 3000;

const wishlistItems = [
  { id: 1, name: 'A new bike', sku: 'BIKE-001', description: 'A shiny new mountain bike.' },
  { id: 2, name: 'A good book', sku: 'BOOK-001', description: 'A captivating novel.' },
  { id: 3, name: 'A trip to the mountains', sku: 'TRIP-001', description: 'A weekend getaway to the mountains.' }
];

app.get('/wishlist', (req, res) => {
  res.json(wishlistItems);
});

app.listen(port, () => {
  console.log(`Wishlist server listening at http://localhost:${port}`);
});