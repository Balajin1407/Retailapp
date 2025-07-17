const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /api/categories (Categories List)
router.get('/', async (req, res) => {
  try {
    const categories = await Product.distinct('Category');
    res.json(categories);
  } catch (err) {
    console.error('Error in GET /api/categories:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router; 