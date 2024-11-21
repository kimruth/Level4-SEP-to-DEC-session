const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config;
const bodyParser = require('body-parser');
const path = require('path');
const Product = require('./models/product.model')
const multer = require('multer');
const cors = require('cors')

// Initialize the app
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/products-api'; // Replace with your MongoDB URI

// Connect to MongoDB
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// GET endpoint to fetch all products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from the database
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err });
  }
});

app.use(express.static(path.join(__dirname, 'upload')));
// app.use(express.static('./upload'));
// path.join(__dirname, 'upload');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/')
    },
    filename: (req, file, cb) => {
        const name = Date.now() + '-' + path.extname(file.originalname);
        cb(null, name);
    }
});

const upload = multer({ 
  storage,
  limits: {
      fileSize: 1024 * 1024 // Equal to 1MB
  },
  fileFilter: (req, file, cb) => {
      // const fileTypes = /jpeg|jpg|png|gif|bmp|pdf|doc|docx;
      // const fileTypes = /jpeg|jpg|png|gif|bmp|pdf|doc|;

      const allowedTypes = [  'image/png'];
      if (allowedTypes.includes(file.mimetype)) {
          cb(null, true);
      } else {
          cb(new Error('Invalid file type. Only images are allowed!'));
      }
  }
 });


// POST endpoint to add a new product
app.post('/upload',upload.single("picture"), async (req, res) => {
  const { name, price, description } = req.body;

  const link = `http://localhost:3000/${req.file.filename}`
  // Validate input
  if (!name || !price) {
    return res.status(400).json({ message: 'Product name and price are required.' });
  }

   
  try {
    // Create a new product document and save it to the database
    const newProduct = new Product({
      name,
      price,
      description,
      image :link
    });

    await newProduct.save(); // Save product to MongoDB

    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: 'Error saving product', error: err });
  }
});

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
      res.status(400).json({
          statu_code: 400,
          status: 'UPLOAD ERROR',
          message: err.message
      });
  } else if (err) {
      res.status(500).json({
          statu_code: 500,
          status: 'UPLOAD ERROR',
          message: err.message
      })
  } else {
      next();
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app; // Export the Express app for testing or other purposes