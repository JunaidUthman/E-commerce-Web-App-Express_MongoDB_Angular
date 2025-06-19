const mongoose = require('mongoose');
const Produit = require('../models/produit');

// Connect to your MongoDB (update the URI if needed)
mongoose.connect('mongodb://localhost:27017/e-commerceDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    return Produit.insertMany([
      {
        name: 'Classic White T-Shirt',
        price: 19.99,
        description: 'Soft cotton, perfect fit, timeless style.',
        stock: 100,
        rating: 4.5,
        image: 'https://burst.shopifycdn.com/photos/model-in-gold-fashion.jpg?width=1000&format=pjpg&exif=0&iptc=0'
      },
      {
        name: 'Denim Jacket',
        price: 49.99,
        description: 'Trendy, durable, and perfect for any season.',
        stock: 50,
        rating: 4.8,
        image: 'https://elizabetta.net/cdn/shop/articles/mens-handrolled-large-silk-pocket-square.jpg?v=1692808561'
      },
      {
        name: 'Summer Dress',
        price: 29.99,
        description: 'Lightweight, colorful, and comfortable.',
        stock: 75,
        rating: 4.7,
        image: 'https://thevou.com/wp-content/uploads/2024/04/Formal-Old-Money-Style-feature-696x1044.jpg'
      }
    ]);
  })
  .then(() => {
    console.log('Dummy products inserted!');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error:', err);
    mongoose.disconnect();
  });