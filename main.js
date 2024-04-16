const express = require('express')
const sneaksAPI = require('sneaks-api')

app = express()
let sneaks = new sneaksAPI()
/*
// Get a list of products by keyword
function productByKeyWord(keyword, limit) {
    sneaks.getProducts(keyword, limit, function(err, products) {
        // do something with the list
        // Maybe can add filters such as size or color in here
        console.log(products)
    })
}

// Get the product prices based on style ID
function productPricesByStyleID(styleID) {
    sneaks.getProductPrices(styleID, function(err, product) {
        // do something with the list
        // Maybe can add filters such as size or color in here
        console.log(product)
    })
}

// Get the most popular products
function mostPopular(limit) {
    sneaks.getMostPopular(limit, function(err, products) {
        // do something with the list
        // Maybe can add filters such as size or color in here
        console.log(products)
    })
}

// Download a list of received information
function downloadProducts() {
    // Create something like a text file and download it
}

// Alert new lowest prices
function alertNewLowestPrices() {
    // Would be cool if the app can alert user about new prices
}

// Display search history
function displaySearchHistory() {
    // Would be cool if the app can display search history on the search bar
}
*/

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

/*app.get("/scrapeByKeyword", function(req, res){
    let array = []
    if (req.keyword)
    {
        sneaks.getProducts(req.param.keyword, 3, function(err, products){
            res.send(products)
        })
    }
    else
    {
        sneaks.getMostPopular(3, function(err, products){
            
            res.send(products[0])
        })
    }

    //res.send(array)
})
*/
/*
app.get("/shoes", function(req, res)
{
    function createShoeCard(shoe) 
    {
        const card = document.createElement('div');
        card.classList.add('card');

        const thumbnail = document.createElement('img');
        thumbnail.src = shoe.thumbnail;
        card.appendChild(thumbnail);

        const title = document.createElement('h2');
        title.textContent = shoe.shoeName;
        card.appendChild(title);

        const brand = document.createElement('p');
        brand.textContent = `Brand: ${shoe.brand}`;
        card.appendChild(brand);

        const description = document.createElement('p');
        description.textContent = shoe.description;
        card.appendChild(description);

        // You can add more shoe details if needed

        document.getElementById('shoeContainer').appendChild(card);
    }

    shoes.forEach(shoe => {
        createShoeCard(shoe);

    res.sendFile(__dirname + "/index.html")
})
})

app.get("/scrapeByStyleID", function(req, res){

    if (req.body.styleID)
    {
        sneaks.getProductPrices(styleID, function(err, products){
            res.send(products)
        })
    }
    else
    {
        sneaks.getMostPopular(3, function(err, products){
            res.send(products)
        })
    }
})
*/
app.get('/search', function (req, res) {
    let array =[]
    sneaks.getProducts(req.query.keyword, 3, function(err, products){
        res.send(JSON.stringify(products))

    })
    
});

app.listen(3000)