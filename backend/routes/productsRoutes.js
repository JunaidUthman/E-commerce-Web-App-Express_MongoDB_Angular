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

module.exports = router;