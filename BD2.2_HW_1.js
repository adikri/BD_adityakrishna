let express = require('express');
let app = express();

let PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on: ", PORT);
})

//q1

let temps = [22, 26, 19, 30, 23, 28, 17, 31]

function filterHighTemperatures (temps) {
    return temps > 25;
}

app.get("/high-temperatures", (req, res) => {
    let highTemps = temps.filter( temps => filterHighTemperatures(temps))
    res.json(highTemps);
})

//q2

let prices = [80, 120, 95, 150, 60, 110];

function filterLowPrices (prices) {
    return prices <= 100;
}

app.get("/low-prices", (req, res) => {
    let lowPrices = prices.filter( prices => filterLowPrices(prices));
    res.json(lowPrices);
})

//q3

let ratings = [4.2, 3.8, 2.5, 4.7, 3.0, 4.9, 3.6];

function filterHighRatings (ratings) {
    return ratings > 3.5;
}

app.get("/high-ratings", (req, res) => {
    let highRatings = ratings.filter( ratings => filterHighRatings(ratings));
    res.json(highRatings);
})

//q4

let names = ['Akshay', 'Priyanka', 'Arjun', 'Anushka', 'Rajesh', 'Kavita'];

function filterLongIndianNames (names) {
    return names.length > 6;
}

app.get("/long-indian-names", (req, res) => {
    let longNames = names.filter( names => filterLongIndianNames(names));
    res.json(longNames);
})

//q5

let productPrices =  [10, 25, 50, 75, 100, 150, 200];

function filterCheaperProducts (prices, filterParam) {
    return prices < filterParam;
}

app.get("/cheaper-products", (req, res) => {
    let filterParam = parseFloat(req.query.filterParam);
    let cheaperProducts = productPrices.filter( prices => filterCheaperProducts(prices, filterParam));
    res.json(cheaperProducts);
})