const express = require('express');
const connectDB = require('./config/db');
// const connectDB2 = require('./config/db2');
var cors = require('cors');
const books = require('./routes/api/books');
const articles = require('./routes/api/articles');
const data = require('./routes/api/datas');
const app = express();

connectDB();
// connectDB2();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use('/api/books', books);
app.use('/api/articles', articles);
app.use('/api/datas', data);
app.use(express.static("build"));

const path = require("path");

app.use(express.static(path.resolve(__dirname, "./mern_a_to_z_client/build")));
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./mern_a_to_z_client/build", "index.html"));
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));