let express = require('express');
let app = express();

let PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on: ", PORT);
})

//q1

let books = [
   { title: 'Moby Jonas', author: 'Herman Melville', publication_year: 2023 },
   { title: '1984', author: 'George Orwell', publication_year: 1984 },
   { title: 'A Tale of Two Cities', author: 'Charles Jonas', publication_year: 2000 },
];

function sortBooksByYear (book1, book2) {
    return book1.publication_year - book2.publication_year;
}

app.get("/books/sort-by-year", (req, res) => {
    let booksCopy = books.slice();
    booksCopy.sort(sortBooksByYear);
    res.json(booksCopy);
})

//q2

let employees = [
    {name: "John", salary: 75000},
    {name: "Doe", salary: 30000},
    {name: "Jane", salary: 50000}
]

function sortEmployeesBySalary (employee1, employee2) {
    return employee2.salary - employee1.salary;
}

app.get("/employees/sort-by-salary", (req, res) => {
    let employeesCopy = employees.slice();
    employeesCopy.sort(sortEmployeesBySalary);
    res.json(employeesCopy);
})

//q3

let products = [
    {name: "Product A", price: 15},
    {name: "Product B", price: 25},
    {name: "Product C", price: 10}
]

function sortProductsByPrice (product1, product2) {
    return product1.price - product2.price;
}

app.get("/products/sort-by-price", (req, res) => {
    let productsCopy = products.slice();
    productsCopy.sort(sortProductsByPrice);
    res.json(productsCopy);
})

//q4

let movies = [
    {title: "Movie A", rating: 9.0},
    {title: "Movie C", rating: 7.0},
    {title: "Movie B", rating: 8.5}
]

function sortMoviesByRating (movie1, movie2) {
    return movie2.rating - movie1.rating;
}

app.get("/movies/sort-by-rating", (req, res) => {
    let moviesCopy = movies.slice();
    moviesCopy.sort(sortMoviesByRating);
    res.json(moviesCopy);
})