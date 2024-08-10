let express = require("express");
let app = express();
let PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is running on: ", PORT);
})

//q1

let employees = [
    {name: "Rahul Gupta", department: "HR", salary: 50000},
    {name: "Sneha Sharma", department: "Finance", salary: 60000},
    {name: "Priya Singh", department: "Marketing", salary: 55000},
    {name: "Amit Kumar", department: "IT", salary: 65000}
]

function filterByDepartment (employeeObj, department) {
    return employeeObj.department === department;
}

app.get("/employees/department/:department", (req, res) => {
    let department = req.params.department;
    let filteredEmployees = employees.filter( employeeObj => filterByDepartment(employeeObj, department));
    res.json(filteredEmployees);
})

//q2

let bikes = [
    {make: "Hero", model: "Splendor", mileage: 80},
    {make: "Bajaj", model: "Pulsar", mileage: 60},
    {make: "TVS", model: "Apache", mileage: 70}
]

function filterByMileage (bikeObj, mileage) {
    return bikeObj.mileage > mileage;
}

app.get("/bikes/mileage/:minMileage", (req, res) => {
    let minMileage = parseFloat(req.params.minMileage);
    let filteredBikes = bikes.filter( bikeObj => filterByMileage(bikeObj, minMileage));
    res.json(filteredBikes);
})

//q3

function filterByMake (bikeObj, make) {
    return bikeObj.make === make;
}

app.get("/bikes/make/:make", (req, res) => {
    let make = req.params.make;
    let filteredBikes = bikes.filter( bikeObj => filterByMake(bikeObj, make));
    res.json(filteredBikes);
})

//q4

let songs = [
    {title: "Tum Hi Ho", genre: "Romantic", rating: 4},
    {title: "Senorita", genre: "Pop", rating: 5},
    {title: "Dil Chahta Hai", genre: "Bollywood", rating: 3}
]

function filterByRating (songObj, rating) {
    return songObj.rating > rating;
}

app.get("/songs/rating/:minRating", (req, res) => {
    let minRating = parseFloat(req.params.minRating);
    let filteredSongs = songs.filter(songObj => filterByRating(songObj, minRating));
    res.json(filteredSongs);
})

//q5

function filterByGenre (songObj, genre) {
    return songObj.genre === genre;
}

app.get("/songs/genre/:genre", (req, res) => {
    let genre = req.params.genre;
    let filteredSongs = songs.filter(songObj => filterByGenre(songObj, genre));
    res.json(filteredSongs);
})

//q6

let tasks = [
    {taskId: 1, taskName: "Prepare Presentation", status: "pending"},
    {taskId: 2, taskName: "Attend Meeting", status: "in-progress"},
    {taskId: 3, taskName: "Submit Report", status: "completed"}
]

function filterByStatus (taskObj, status) {
    return taskObj.status === status;
}

app.get("/tasks/status/:status", (req, res) => {
    let status = req.params.status;
    let filteredTasks = tasks.filter(taskObj => filterByStatus(taskObj, status));
    res.json(filteredTasks);
})