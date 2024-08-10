let express = require('express');
let app = express();

let PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on: ", PORT);
})

//q1

let heights = [160, 175, 180, 165, 170]

function sortHeightsAscending (height1, height2) {
    return height1 - height2;
}

app.get("/heights/sort-ascending", (req, res) => {
    let heightsCopy = heights.slice();
    heightsCopy.sort(sortHeightsAscending);
    res.json(heightsCopy);
})

//q2

function sortHeightsDescending (height1, height2) {
    return height2 - height1;
}

app.get("/heights/sort-descending", (req, res) => {
    let heightsCopy = heights.slice();
    heightsCopy.sort(sortHeightsDescending);
    res.json(heightsCopy);
})

//q3

let employees = [
    {name: "Rahul", employeeId: 101, salary: 50000},
    {name: "Sita", employeeId: 102, salary: 60000},
    {name: "Amit", employeeId: 103, salary: 45000}
]

function sortEmployeesBySalaryDescending (employee1, employee2) {
    return employee2.salary - employee1.salary;
}

app.get("/employees/sort-by-salary-descending", (req, res) => {
    let employeesCopy = employees.slice();
    employeesCopy.sort(sortEmployeesBySalaryDescending);
    res.json(employeesCopy);
})

//q4

let books = [
    {title: "The God of Small Things", author: "Arundhati Roy", pages: 340},
    {title: "The White Tiger", author: "Aravind Adiga", pages: 321},
    {title: "The Palace of Illusions", author: "Chitra Banerjee", pages: 360}
]

function sortBooksByPagesAscending (book1, book2) {
    return book1.pages - book2.pages;
}

app.get("/books/sort-by-pages-ascending", (req, res) => {
    let booksCopy = books.slice();
    booksCopy.sort(sortBooksByPagesAscending);
    res.json(booksCopy);
})
