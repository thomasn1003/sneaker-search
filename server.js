const express = require('express');
const sneaksAPI = require('sneaks-api');
const path = require('path');

const app = express();
const sneaks = new sneaksAPI();

app.use(express.static('public'));
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views'));

sneaks.getMostPopular(10, function(err, products) {
  if (err) {
      console.error("Error fetching most popular products:", err);
  } else {
      // Render index template with most popular products
      app.get('/', function (req, res) {
          res.render('index', { products });
      });
  }
});



app.get('/search', function (req, res) {
    sneaks.getProducts(req.query.keyword, 30, function(err, products) { 
      res.render('index', { products }); // Render index.ejs with products data

    });
});

app.listen(5500, () => {
    console.log('Server is running on port http://127.0.0.1:5500/');
});