const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Customer', 
    required: true 
    },
  property: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Property', 
    required: true 
    },
  startDate: { 
    type: Date, 
    required: true 
    },
  endDate: { 
    type: Date, 
    required: true 
    },
  totalPrice: { 
    type: Number, 
    required: true 
},
});

module.exports = mongoose.model('Booking', bookingSchema);