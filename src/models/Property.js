const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
    },
  description: { 
    type: String, 
    required: true 
    },
  price: { 
    type: Number, 
    required: true 
    },
  location: { 
    type: String, 
    required: true },
});

module.exports = mongoose.model('Property', propertySchema);