// models/Book.js

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  author: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  published_date: {
    type: String
  },
  publisher: {
    type: Number
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});
const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  published_date: {
    type: Date,
    default: Date.now
  },
  claim: {
    type: String,
    required: true
  },
  evidence: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  DOI: {
    type: String,
    required: true
  },
  types: {
    type: String,
    required: true
  }
});
// const Book = mongoose.model('book', BookSchema);
// const Article = mongoose.model('article', ArticleSchema);

// module.exports = {
  // Book, 
  // Article
// }
// module.exports = Article = mongoose.model('article', ArticleSchema);
module.exports = Book = mongoose.model('book', BookSchema);