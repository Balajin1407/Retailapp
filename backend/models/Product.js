const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  Index: Number,
  Name: String,
  Description: String,
  Brand: String,
  Category: String,
  Price: Number,
  Currency: String,
  Stock: Number,
  EAN: Number,
  Color: String,
  Size: String,
  Availability: String,
  ShortDescription: String,
  Image: String,
  "Internal ID": { type: String, unique: true }
});

module.exports = mongoose.model('Product', ProductSchema); 