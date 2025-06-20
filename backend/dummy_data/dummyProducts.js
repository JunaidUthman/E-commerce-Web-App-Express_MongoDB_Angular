const mongoose = require('mongoose');
const Produit = require('../models/produit');

async function seed() {
  await mongoose.connect('mongodb://localhost:27017/e-commerceDB');
  console.log('MongoDB connected');

  // Remove old data (optional)
  await Produit.deleteMany({});

  // Insert products with embedded details, colors, and sizes
  await Produit.insertMany([
    {
      name: 'Classic White T-Shirt',
      price: 19.99,
      description: 'Soft cotton, perfect fit, timeless style.',
      stock: 100,
      rating: 4.5,
      image: 'https://burst.shopifycdn.com/photos/model-in-gold-fashion.jpg?width=1000&format=pjpg&exif=0&iptc=0',
      salesCount: 120,
      sex: 'Unisexe',
      productDetails: [
        { color: 'White', size: 'M' },
        { color: 'Green', size: 'L' },
        { color: 'Black', size: 'X' }
      ]
    },
    {
      name: 'Denim Jacket',
      price: 49.99,
      description: 'Trendy, durable, and perfect for any season.',
      stock: 50,
      rating: 4.8,
      image: 'https://elizabetta.net/cdn/shop/articles/mens-handrolled-large-silk-pocket-square.jpg?v=1692808561',
      salesCount: 80,
      sex: 'Homme',
      productDetails: [
        { color: 'Blue', size: 'M' },
        { color: 'White', size: 'XL' },
        { color: 'Black', size: 'S' }
      ]
    },
    {
      name: 'Summer Dress',
      price: 29.99,
      description: 'Lightweight, colorful, and comfortable.',
      stock: 75,
      rating: 4.7,
      image: 'https://thevou.com/wp-content/uploads/2024/04/Formal-Old-Money-Style-feature-696x1044.jpg',
      salesCount: 150,
      sex: 'Femme',
      productDetails: [
        { color: 'Red', size: 'S' },
        { color: 'Yellow', size: 'M' },
        { color: 'Blue', size: 'XXL' }
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