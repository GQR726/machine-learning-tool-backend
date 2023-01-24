// models/Book.js

const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  ID: {
    type: String,
    required: true
  },
  TimeColumn: {
    type: String,
    required: true
  },
  Numerical: {
    type: Number,
    required: true
  },
  published_date: {
    type: Date,
    default: Date.now
  },
  Categorical: {
    type: Number,
    required: true
  },
  Text: {
    type: Number,
    required: true
  },
  Feature: {
    type: String,
    required: true
  },
  Distinct: {
    type: Number,
    required: true
  },
  Imputed: {
    type: Number,
    required: true
  },
  Mean: {
    type: Number,
    required: true
  },
  Maximun: {
    type: Number,
    required: true
  },
  Minimun: {
    type: Number,
    required: true
  }
});

module.exports = Article = mongoose.model('article', ArticleSchema);