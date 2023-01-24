// models/Book.js

const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Samples: {
    type: Number
  },
  Features: {
    type: Number
  },
  Timepoint: {
    type: Number
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Data = mongoose.model('data', DataSchema);