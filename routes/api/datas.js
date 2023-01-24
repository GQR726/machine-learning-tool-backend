// routes/api/books.js

const express = require('express');
const router = express.Router();

// Load Book model
const Data = require('../../models/Data');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('Data route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
    Data.find()
    .then(datas => res.json(datas))
    .catch(err => res.status(404).json({ nodatasfound: 'No Articles found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
    Data.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.status(404).json({ nodatafound: 'No Article found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
    Data.create(req.body)
    .then(data => res.json({ msg: 'Article added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this Article' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    Data.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Data.findByIdAndRemove(req.params.id, req.body)
    .then(data => res.json({ mgs: 'Article entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a Article' }));
});

module.exports = router;