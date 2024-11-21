const { required } = require('joi');
const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

// Product schema and model
const productsSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image:{type:String, required: true }
  });
  
//   const Product = mongoose.model('Product', productSchema);


module.exports = mongoose.model('Products', productsSchema)