// module.exports = router;
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
    hasPrev: page > 1,
  };
}

// 1. GET /api/products (Product Listing)
router.get('/', async (req, res) => {
  let page = parseInt(req.query.page) || 1;
  let limit = Math.min(parseInt(req.query.limit) || 50, 100);

  const total = await Product.countDocuments();
  const products = await Product.find({}, { Description: 0 }) // Exclude Description for listing
    .skip((page - 1) * limit)
    .limit(limit);

  res.json({
    products,
    pagination: getPagination(page, limit, total),
  });
});

// 3. GET /api/products/search (Search by Internal ID or Name)
router.get('/search', async (req, res) => {
  let page = parseInt(req.query.page) || 1;
  let limit = Math.min(parseInt(req.query.limit) || 50, 100);
  const q = req.query.q || '';

  const query = {
    $or: [
      { "Internal ID": { $regex: q, $options: 'i' } },
      { Name: { $regex: q, $options: 'i' } },
    ],
  };

  const total = await Product.countDocuments(query);
  const products = await Product.find(query, { Description: 0 })
    .skip((page - 1) * limit)
    .limit(limit);

  res.json({
    products,
    pagination: getPagination(page, limit, total),
  });
});

// 5. GET /api/products/latest (Latest Products)
router.get('/latest', async (req, res) => {
  let limit = Math.min(parseInt(req.query.limit) || 10, 100);
  const products = await Product.find({}, { Description: 0 })
    .sort({ Index: -1 })
    .limit(limit);

  res.json({ products });
});

// 2. GET /api/products/:id (Product Details)
router.get('/:id', async (req, res) => {
  const product = await Product.findOne({ "Internal ID": req.params.id });
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

module.exports = router; 