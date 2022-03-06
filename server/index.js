require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db');
const app = express();

// middleware
app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(express.json());

// routes
app.get('/products', async (req, res) => {
  try {
    const products = await pool.query('SELECT * FROM products')
    res.json(products.rows)
  } catch (error) {
    console.error(error.message)
  }
})

try {
  app.listen(process.env.PORT || 5000, () => console.log('listening on port'))
} catch (error) {
  console.log('Something went wrong: ' + error)
}