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

// 3. GET /api/products/search (Search by Internal ID or Name)
router.get('/search', async (req, res) => {
  try {
    let page = parseInt(req.query.page) || 1;
    let limit = Math.min(parseInt(req.query.limit) || 50, 100);
    const q = req.query.q || '';

    let query = {};
    if (q) {
      const indexValue = parseInt(q);
      if (!isNaN(indexValue)) {
        // If q is a number, search by Index OR Name
        query = {
          $or: [
            { Index: indexValue },
            { Name: { $regex: q, $options: 'i' } }
          ]
        };
      } else {
        // If q is not a number, search by Name only
        query = { Name: { $regex: q, $options: 'i' } };
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

// 2. GET /api/products/:id (Product Details)
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findOne({ "Internal ID": req.params.id });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    console.error('Error in GET /api/products/:id:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router; 