const express = require('express');
const router = express.Router();
const Card = require('../models/card');
const Produit = require('../models/produit');

const Client = require('../models/client');
const auth = require('../middleware/authMiddleware'); // import the middleware

router.post('/add-to-card', auth, async (req, res) => {
  const { produitId, selectedColor, selectedSize, quantity } = req.body;
  try {
    // Fetch the product
    let product = await Produit.findById(produitId).lean();
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    // Clear productDetails and add only the selected detail
    product.productDetails = [{
      color: selectedColor,
            size: selectedSize
    }];

    // Store the product and quantity in the card
    const card = new Card({
      qu: quantity,
      produit: product
    });

    await card.save();

    // Add card to the logged-in user's card array
    await Client.findByIdAndUpdate(
      req.userId,
      { $push: { card: card._id } }
    );

    res.json({ success: true, message: 'Product added to card!', card });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});
module.exports = router;