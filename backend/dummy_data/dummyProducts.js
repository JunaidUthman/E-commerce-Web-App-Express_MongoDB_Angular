const mongoose = require('mongoose');
const Produit = require('../models/produit');

async function seed() {
  await mongoose.connect('mongodb://localhost:27017/e-commerceDB');
  console.log('MongoDB connected');


  // Insert products with embedded details, colors, and sizes
  await Produit.insertMany([
    {
      name: 'Italian Leather Jacket',
      price: 10000,
      description: 'good quality, perfect fit, timeless style.',
      stock: 100,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/8594331/pexels-photo-8594331.jpeg',
      salesCount: 0,
      productDetails: [
        { color: 'White', size: 'M' },
        { color: 'Green', size: 'L' },
        { color: 'Black', size: 'X' }
      ] ,
      sex: 'Unisexe',
      
    },
    
    {
      name: 'Classic White T-Shirt',
      price: 19.99,
      description: 'Soft cotton, perfect fit, timeless style.',
      stock: 100,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/32090347/pexels-photo-32090347.jpeg',
      salesCount: 0,
      productDetails: [
        { color: 'White', size: 'M' },
        { color: 'Green', size: 'L' },
        { color: 'Black', size: 'X' }
      ] ,
      sex: 'Unisexe',

    },
    {
      name: 'Classic White T-Shirt',
      price: 19.99,
      description: 'Soft cotton, perfect fit, timeless style.',
      stock: 100,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg',
      salesCount: 0,
      productDetails: [
        { color: 'White', size: 'M' },
        { color: 'Green', size: 'L' },
        { color: 'Black', size: 'X' }
      ] ,
      sex: 'Unisexe',

    }
  ]);

  console.log('Dummy products with embedded details inserted!');
  mongoose.disconnect();
}

seed().catch(err => {
  console.error('Error:', err);
  mongoose.disconnect();
});