const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 60 }); // cache for 60 seconds

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

// Add this helper at the top of the file
function errorResponse(res, status, error, message, details = null) {
  const body = { error, message };
  if (details) body.details = details;
  return res.status(status).json(body);
}

console.log("Registering route: /");
// 1. GET /api/products (Product Listing)
router.get('/', async (req, res) => {
  let page = parseInt(req.query.page) || 1;
  let limit = Math.min(parseInt(req.query.limit) || 50, 100);
  const cacheKey = `products:${page}:${limit}`;

  const cached = cache.get(cacheKey);
  if (cached) {
    return res.json(cached);
  }

  try {
    const total = await Product.countDocuments();
    const products = await Product.find({}, { Description: 0 })
      .sort({ Index: 1 }) // Ensure products are sorted by Index ascending
      .skip((page - 1) * limit)
      .limit(limit);

    const response = {
      products,
      pagination: getPagination(page, limit, total)
    };
    cache.set(cacheKey, response);
    res.json(response);
  } catch (err) {
    console.error('Error in GET /api/products:', err);
    return errorResponse(res, 500, "ServerError", "Internal server error");
  }
});

console.log("Registering route: /search");
// 3. GET /api/products/search (Search by Index or Name)
router.get('/search', async (req, res) => {
  let page = parseInt(req.query.page) || 1;
  let limit = Math.min(parseInt(req.query.limit) || 50, 100);
  const q = req.query.q || '';
  const cacheKey = `search:${q}:${page}:${limit}`;

  const cached = cache.get(cacheKey);
  if (cached) {
    return res.json(cached);
  }

  try {
    let query = {};
    if (q) {
      if (/^\d+$/.test(q.trim())) {
        query = { Index: parseInt(q, 10) };
      } else {
        let base = q.toLowerCase().replace(/s$/, '');
        let regex = new RegExp(base + 's?', 'i');
        query = { Name: { $regex: regex } };
      }
    }

    const total = await Product.countDocuments(query);
    const products = await Product.find(query, { Description: 0 })
      .skip((page - 1) * limit)
      .limit(limit);

    const response = {
      products,
      pagination: getPagination(page, limit, total),
    };
    cache.set(cacheKey, response);
    res.json(response);
  } catch (err) {
    console.error('Error in GET /api/products/search:', err);
    return errorResponse(res, 500, "ServerError", "Internal server error");
  }
});

console.log("Registering route: /latest");
// 5. GET /api/products/latest (Latest Products)
router.get('/latest', async (req, res) => {
  let limit = Math.min(parseInt(req.query.limit) || 10, 100);
  const cacheKey = `latest:${limit}`;

  const cached = cache.get(cacheKey);
  if (cached) {
    return res.json(cached);
  }

  try {
    const products = await Product.find({}, { Description: 0 })
      .sort({ Index: -1 })
      .limit(limit);

    const response = { products };
    cache.set(cacheKey, response);
    res.json(response);
  } catch (err) {
    console.error('Error in GET /api/products/latest:', err);
    return errorResponse(res, 500, "ServerError", "Internal server error");
  }
});

console.log("Registering route: /:index");
// 2. GET /api/products/:index (Product Details)
router.get('/:index', async (req, res) => {
  const indexValue = parseInt(req.params.index, 10);
  if (isNaN(indexValue)) {
    return errorResponse(res, 400, "ValidationError", "Invalid index parameter");
  }

  const cacheKey = `product:${indexValue}`;
  const cached = cache.get(cacheKey);
  if (cached) {
    return res.json(cached);
  }

  try {
    const product = await Product.findOne({ Index: indexValue });
    if (!product) {
      return errorResponse(res, 404, "NotFound", "Product not found");
    }
    cache.set(cacheKey, product);
    res.json(product);
  } catch (err) {
    console.error('Error in GET /api/products/:index:', err);
    return errorResponse(res, 500, "ServerError", "Internal server error");
  }
});

module.exports = router; 