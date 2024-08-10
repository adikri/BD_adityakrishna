let express = require("express");
let app = express();
let PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is running on: ", PORT);
})

let book = {
    title: "The God of Small Things",
    author: "Arundhati Roy",
    publicationYear: 1997,
    genre: "Novel",
    isAvailable: true,
    stock: 5
}

//q1

app.get("/book", (req, res) => {
    res.json(book);
})

//q2

function getFullTitleAndAuthor (book) {
    return book.title + " by " + book.author;
}

app.get("/book/fulltitle-author", (req, res) => {
    let fullTitleAndAuthor = getFullTitleAndAuthor(book);
    res.json({fullTitleAndAuthor: fullTitleAndAuthor});
})

//q3

function getGenreAndAvailability (book) {
    return {
        genre: book.genre,
        isAvailable: book.isAvailable
    }
}

app.get("/book/genre-availability", (req, res) => {
    let genreAndAvailability = getGenreAndAvailability(book);
    res.json(genreAndAvailability);
})

//q4

function getBookAge (book) {
    let bookAge = 2024 - book.publicationYear;
    return bookAge;
}

app.get("/book/age", (req, res) => {
    let bookAge = getBookAge(book);
    res.json({age: bookAge});
})

//q5

function getBookSummary (book) {
    return "Title: " + book.title + ", Author: " + book.author + ", Genre: " + book.genre + ", Published: " + book.publicationYear;
}

app.get("/book/summary", (req, res) => {
    let bookSummary = getBookSummary(book);
    res.json({summary: bookSummary});
})

//q6

function checkStockAndOrder (book) {
    if (book.stock > 0) {
        return {
            status: "In Stock",
            stock: book.stock
        }
    } else {
        return {
            status: "Out of Stock",
            message: "Order Required"
        }
    }
}

app.get("/book/stock-status", (req, res) => {
    let stockStatus = checkStockAndOrder(book);
    res.json(stockStatus);
})