let express = require('express');
let app = express();
let PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is running on: ", PORT);  
})

//q1
function generateProfileUrl (username) {
    return "https://github.com/" + username;
}

app.get("/github-profile", (req, res) => {
    let username = req.query.username;
    res.send(generateProfileUrl(username));
})

//q2
function generateCertificate (firstName, lastName, courseName) {
    return "This certification is awarded to " + firstName + " " + lastName + " for completing the course " + courseName;
}

app.get("/certificate", (req, res) => {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    let courseName = req.query.courseName;
    res.send(generateCertificate(firstName, lastName, courseName));
})

//q3
function calculateGrade (maths, science, english) {
    let totalMarks = maths + science + english;
    let gradeInPer = (totalMarks/300) * 100;
    return "Your grade in percentage is " + parseInt(gradeInPer) + "%";
}

app.get("/grade", (req, res) => {
    let maths = parseInt(req.query.maths);
    let science = parseInt(req.query.science);
    let english = parseInt(req.query.english);
    res.send(calculateGrade(maths, science, english));
})

//q4
function splitBill (billAmount, numberOfFriends) {
    let splitAmount = billAmount / numberOfFriends;
    return "Result: Each friend owes ₹" + splitAmount + " against the bill";
}

app.get("/split-bill", (req, res) => {
    let billAmount = parseFloat(req.query.billAmount);
    let numberOfFriends = parseInt(req.query.numberOfFriends);
    res.send(splitBill(billAmount, numberOfFriends));
})

//q5
function calculateSalary (totalHours, hourlyWage) {
    let monthlySalary = totalHours * hourlyWage;
    return "Result: Your monthly salary is ₹" + monthlySalary;
}

app.get("/monthly-salary", (req, res) => {
    let totalHours = parseInt(req.query.totalHours);
    let hourlyWage = parseFloat(req.query.hourlyWage);
    res.send(calculateSalary(totalHours, hourlyWage));
})