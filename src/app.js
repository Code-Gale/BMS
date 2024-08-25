const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const bookingRoutes = require('./routes/bookingRoutes');
const customerRoutes = require('./routes/customerRoutes');
const propertyRoutes = require('./routes/propertyRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.DBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Routes
app.use('/bookings', bookingRoutes);
app.use('/customers', customerRoutes);
app.use('/properties', propertyRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});