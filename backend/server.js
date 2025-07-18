const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the frontend build
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Test route
console.log("Registering route: / (root)");
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// API routes
console.log("Registering route: /api/products");
app.use('/api/products', require('./routes/products'));
console.log("Registering route: /api/categories");
app.use('/api/categories', require('./routes/categories'));

// Catch-all: serve index.html for frontend routes (after API routes)
console.log("Registering route: * (catch-all)");
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
