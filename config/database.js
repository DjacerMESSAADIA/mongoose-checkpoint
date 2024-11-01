// Database configuration file
const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB using the URI from environment variables
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB; 