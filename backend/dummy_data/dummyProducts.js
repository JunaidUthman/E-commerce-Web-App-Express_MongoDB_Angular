const mongoose = require('mongoose');
const Produit = require('../models/produit');

async function seed() {
  await mongoose.connect('mongodb://localhost:27017/e-commerceDB', { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('MongoDB connected');

  // Remove old data (optional)
  await Produit.deleteMany({});

  // Insert products with embedded details
  await Produit.insertMany([
    {
      name: 'Classic White T-Shirt',
      price: 19.99,
      description: 'Soft cotton, perfect fit, timeless style.',
      stock: 100,
      rating: 4.5,
      image: 'https://burst.shopifycdn.com/photos/model-in-gold-fashion.jpg?width=1000&format=pjpg&exif=0&iptc=0',
      productDetails: [
        { color: 'White', size: 'M', count: 30 },
        { color: 'White', size: 'L', count: 40 },
        { color: 'Black', size: 'M', count: 30 }
      ]
    },
    {
      name: 'Denim Jacket',
      price: 49.99,
      description: 'Trendy, durable, and perfect for any season.',
      stock: 50,
      rating: 4.8,
      image: 'https://elizabetta.net/cdn/shop/articles/mens-handrolled-large-silk-pocket-square.jpg?v=1692808561',
      productDetails: [
        { color: 'Blue', size: 'M', count: 20 },
        { color: 'Blue', size: 'L', count: 15 },
        { color: 'Black', size: 'M', count: 15 }
      ]
    },
    {
      name: 'Summer Dress',
      price: 29.99,
      description: 'Lightweight, colorful, and comfortable.',
      stock: 75,
      rating: 4.7,
      image: 'https://thevou.com/wp-content/uploads/2024/04/Formal-Old-Money-Style-feature-696x1044.jpg',
      productDetails: [
        { color: 'Red', size: 'S', count: 25 },
        { color: 'Yellow', size: 'M', count: 30 },
        { color: 'Blue', size: 'L', count: 20 }
      ]
    }
  ]);

  console.log('Dummy products with embedded details inserted!');
  mongoose.disconnect();
}

seed().catch(err => {
  console.error('Error:', err);
  mongoose.disconnect();
});