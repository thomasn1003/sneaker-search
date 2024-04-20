const express = require('express');
const sneaksAPI = require('sneaks-api');
const path = require('path');

const app = express();
const sneaks = new sneaksAPI();

app.use(express.static('public'));
app.set('view engine', 'ejs'); // Set EJS as the view engine

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, 'index.ejs'));
});

app.get('/search', function (req, res) {
    sneaks.getProducts(req.query.keyword, 10, function(err, products) { 
        res.render('index', { products }); // Render index.ejs with products data
    });
});

app.listen(3000, () => {
    console.log('Server is running on port http://127.0.0.1:3000/');
});