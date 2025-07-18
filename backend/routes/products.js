const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Helper for pagination metadata
function getPagination(page, limit, total) {
  const totalPages = Math.ceil(total / limit);
  return {
    page,
    limit,
    total,
    totalPages,
    hasNext: page < totalPages,
    hasPrev: page > 1
  };
}

console.log("Registering route: /");
// 1. GET /api/products (Product Listing)
router.get('/', async (req, res) => {
  try {
    let page = parseInt(req.query.page) || 1;
    let limit = Math.min(parseInt(req.query.limit) || 50, 100);

    const total = await Product.countDocuments();
    const products = await Product.find({}, { Description: 0 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      products,
      pagination: getPagination(page, limit, total)
    });
  } catch (err) {
    console.error('Error in GET /api/products:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

console.log("Registering route: /search");
// 3. GET /api/products/search (Search by Internal ID or Name)
router.get('/search', async (req, res) => {
  try {
    let page = parseInt(req.query.page) || 1;
    let limit = Math.min(parseInt(req.query.limit) || 50, 100);
    const q = req.query.q || '';

    let query = {};
    if (q) {
      // If q is a pure number, search only by Index
      if (/^\d+$/.test(q.trim())) {
        query = { Index: parseInt(q, 10) };
      } else {
        // Flexible substring match for singular/plural (e.g., scanner/scanners)
        let base = q.toLowerCase().replace(/s$/, '');
        let regex = new RegExp(base + 's?', 'i');
        query = { Name: { $regex: regex } };
      }
    }

    const total = await Product.countDocuments(query);
    const products = await Product.find(query, { Description: 0 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      products,
      pagination: getPagination(page, limit, total),
    });
  } catch (err) {
    console.error('Error in GET /api/products/search:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

console.log("Registering route: /latest");
// 5. GET /api/products/latest (Latest Products)
router.get('/latest', async (req, res) => {
  try {
    let limit = Math.min(parseInt(req.query.limit) || 10, 100);
    const products = await Product.find({}, { Description: 0 })
      .sort({ Index: -1 })
      .limit(limit);

    res.json({ products });
  } catch (err) {
    console.error('Error in GET /api/products/latest:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

console.log("Registering route: /:index");
// 2. GET /api/products/:index (Product Details)
router.get('/:index', async (req, res) => {
  try {
    const indexValue = parseInt(req.params.index, 10);
    if (isNaN(indexValue)) {
      return res.status(400).json({ message: 'Invalid index parameter' });
    }
    const product = await Product.findOne({ Index: indexValue });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    console.error('Error in GET /api/products/:index:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router; 