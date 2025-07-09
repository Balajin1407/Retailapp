const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /api/categories (Categories List)
router.get('/', async (req, res) => {
  const categories = await Product.distinct('Category');
  res.json(categories);
});

module.exports = router; 