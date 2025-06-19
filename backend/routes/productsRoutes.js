const express = require('express');
const router = express.Router();
const Produit = require('../models/produit');

router.get('/top-products', async (req, res) => {
    console.log("Fetching top products");
  try {
    const products = await Produit.find().sort({ salesCount: -1 }).limit(3);
    
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get a product and its details by ID
router.get('/product-with-details/:id', async (req, res) => {
  try {
    const product = await Produit.findById(req.params.id).populate('productDetails');
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;