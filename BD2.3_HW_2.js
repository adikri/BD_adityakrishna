let express = require("express");
let app = express();

let PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});

//q1

let products = [
    {name: "Product A", inStock: true},
    {name: "Product B", inStock: false},
    {name: "Product C", inStock: true},
    {name: "Product D", inStock: false}
]

function filterInStockProducts (productObj) {
    return productObj.inStock;
}

app.get("/in-stock-products", (req, res) => {
    let filteredProducts = products.filter(productObj => filterInStockProducts(productObj));
    res.json(filteredProducts);
})

//q2

let users = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 17},
    {name: "Dave", age: 16},
]

function filterAdults (users) {
    return users.age > 18;
}

app.get("/adult-users", (req, res) => {
    let filteredAdults = users.filter(user => filterAdults(user));
    res.json(filteredAdults);
})

//q3

let productPrices = [
    {name: "Product A", price: 50},
    {name: "Product B", price: 150},
    {name: "Product C", price: 200},
    {name: "Product D", price: 90}
]

function filterExpensiveProducts(products, price){
    return products.price > price;
}

app.get("/expensive-products", (req, res) => {
    let price = parseFloat(req.query.price);
    let filteredProducts = productPrices.filter(product => filterExpensiveProducts(product, price));
    res.json(filteredProducts);
})

//q4

let articles = [
    {title:"Article A", wordCount: 400},
    {title:"Article B", wordCount: 600},
    {title:"Article C", wordCount: 700},
    {title:"Article D", wordCount: 300}
]

function filterLongArticles(article, wordCount){
    return article.wordCount > wordCount;
}

app.get("/long-articles", (req, res) => {
    let minWords = parseInt(req.query.minWords);
    let filteredArticles = articles.filter(article => filterLongArticles(article, minWords));
    res.json(filteredArticles);
})

//q5

let movies = [
    {title: "Movie A", rating: 8.5},
    {title: "Movie B", rating: 7.0},
    {title: "Movie C", rating: 9.0},
    {title: "Movie D", rating: 6.5}
]

function filterHighRatedMovies(movie, rating){
    return movie.rating > rating;
}

app.get("/high-rated-movies", (req, res) => {
    let rating = parseFloat(req.query.rating);
    let filteredMovies = movies.filter(movie => filterHighRatedMovies(movie, rating));
    res.json(filteredMovies);
})

//q6

let employees = [
    {name: "Employee A", experience: 3},
    {name: "Employee B", experience: 6},
    {name: "Employee C", experience: 10},
    {name: "Employee D", experience: 2}
]

function filterExperiencedEmployees(employee, experience){
    return employee.experience > experience;
}

app.get("/experienced-employees", (req, res) => {
    let years = parseInt(req.query.years);
    let filteredEmployees = employees.filter(employee => filterExperiencedEmployees(employee, years));
    res.json(filteredEmployees);
})