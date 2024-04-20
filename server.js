const express = require('express')
const sneaksAPI = require('sneaks-api')

app = express()
let sneaks = new sneaksAPI()

app.use(express.static('public'));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})


app.get('/search', function (req, res) 
{
    sneaks.getProducts(req.query.keyword, 10, function(err, products)
    { 
      // Create a loop to create a div section that has small div sections
      // let bigDiv =``
      // for product in products:
      // shoeName = product[index].shoeName
      // brand = product[index].brand
      // thumbname = product[index].thumbnail
      // let htmlString = `<div>
      //                      <h1>${shoeName}</h1>
      //                      <h2>${brand}</h2>
      //                      <img src = thumnail>
      //                    <div>`
      // concatenate htmlString to the end of bigDiv
        let test = products[0].shoeName
        let test1 = products[1].shoeName
        res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name = "viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        
            <title>Shoe Price Search</title>
        </head>
        <body>
        
          <!-- Nav Bar -->
        <h1>Sneaker Search</h1>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                  </ul>
                  <!--
                  <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                    -->
                </div>
            </nav>
          
          <div class="search">
            <h4>Search here</h4>
            <form action="/search" method ="get">
                <label for="keyword"></label>
                <input type="text" id="keyword" name="keyword" placeholder="Enter a keyword"/>
                <input type="submit" value="Search keyword"/>
            </form>
            <div>
                <h1>${test}</h1>
                <h1>${test1}</h1>
            </div>
        
        </body>
        </html>`)
    })
});

app.listen(3000)


