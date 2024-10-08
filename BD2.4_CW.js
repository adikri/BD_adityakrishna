let express = require('express');
let app = express();

let PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on: ", PORT);
})

//q1

let ages = [25, 30, 18, 22, 27]

function sortAgesAscending (age1, age2) {
    return age1 - age2;
}

app.get("/ages/sort-ascending", (req, res) => {
    let agesCopy = ages.slice();
    agesCopy.sort(sortAgesAscending);
    res.json(agesCopy);
})

//q2

function sortAgesDescending (age1, age2) {
    return age2 - age1;
}

app.get("/ages/sort-descending", (req, res) => {
    let agesCopy = ages.slice();
    agesCopy.sort(sortAgesDescending);
    res.json(agesCopy);
})

//q3

let students = [
    {name: "Rahul", rolNo: 101, marks: 85},
    {name: "Sita", rolNo: 102, marks: 95},
    {name: "Amit", rolNo: 103, marks: 70}
]

function sortStudentsByMarksDescending (student1, student2) {
    return student2.marks - student1.marks;
}

app.get("/students/sort-by-marks-descending", (req, res) => {
    let studentsCopy = students.slice();
    studentsCopy.sort(sortStudentsByMarksDescending);
    res.json(studentsCopy);
})

//q4

let cars = [
    {make: "Maruti", model: "Swift", mileage: 15},
    {make: "Hyundai", model: "i20", mileage: 18},
    {make: "Tata", model: "Nexon", mileage: 20}
]

function sortCarsByMileageDescending(cars1, cars2){
    return cars2.mileage - cars1.mileage;
}

app.get("/cars/sort-by-mileage-descending", (req, res) => {
    let carsCopy = cars.slice();
    carsCopy.sort(sortCarsByMileageDescending);
    res.json(carsCopy);
})