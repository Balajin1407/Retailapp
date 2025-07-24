const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 300 }); // cache for 5 minutes

console.log("Registering route: / (categories)");
// Add this helper at the top of the file
function errorResponse(res, status, error, message, details = null) {
  const body = { error, message };
  if (details) body.details = details;
  return res.status(status).json(body);
}

// GET /api/categories (Categories List)
router.get('/', async (req, res) => {
  const cacheKey = 'categories';

  const cached = cache.get(cacheKey);
  if (cached) {
    return res.json(cached);
  }

  try {
    const categories = await Product.distinct('Category');
    const response = { categories };
    cache.set(cacheKey, response);
    res.json(response);
  } catch (err) {
    console.error('Error in GET /api/categories:', err);
    return errorResponse(res, 500, "ServerError", "Internal server error");
  }
});

module.exports = router; 