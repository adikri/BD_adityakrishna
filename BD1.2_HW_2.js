let express = require('express');
let app = express();
let PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
})

//q1
app.get("/bmi", (req, res) => {
    let height = parseFloat(req.query.height);
    let weight = parseFloat(req.query.weight);
    let bmi = weight / (height * height);
    let result = "Your BMI is " + bmi;
    res.send(result);
})

//q2
app.get("/checkout", (req, res) => {
    let product = parseInt(req.query.product);
    let units = parseInt(req.query.units);
    let price = parseFloat(req.query.price);
    let totalPrice = price * units;
    let result = "Your total for " + units + " " + product + " is " + totalPrice;
    
    res.send(result);
})

//q3
app.get("/grade", (req, res) => {
    let math = parseInt(req.query.math);
    let science = parseInt(req.query.science);
    let english = parseInt(req.query.english);
    let gradeInPercentage = ((math + science + english) / 300) * 100;
    let result = "Your grade in percentage is " + gradeInPercentage + "%"
    res.send(result);
})

//q4
app.get("/discounted-price", (req, res) => {
    let cartTotal = parseFloat(req.query.cartTotal);
    let discount = parseFloat(req.query.discount);
    let discountedPrice = cartTotal - ( cartTotal * ( discount / 100));
    let result = "Your bill amount is " + discountedPrice;
    res.send(result);
})

//q5
app.get("/split-bill", (req, res) => {
    let billAmount = parseFloat(req.query.billAmount);
    let numberOfFriends = parseInt(req.query.numberOfFriends);
    let splitAmount = billAmount / numberOfFriends;
    let result = "Each friend owes ₹ " + splitAmount;
    res.send(result);
})

//q6
app.get("/celsius-to-fahrenheit", (req, res) => {
    let temperature = parseFloat(req.query.temperature);
    let fahrenheit = temperature * 9/5 + 32;
    let result = "Result: " + fahrenheit + " Fahrenheit";
    res.send(result);
})

//q7
app.get("/monthly-salary", (req, res) => {
    let totalHours = parseFloat(req.query.totalHours);
    let hourlyWage = parseFloat(req.query.hourlyWage);
    let monthlySalary = hourlyWage * totalHours;
    let result = "Result: Your monthly salary is ₹" + monthlySalary;
    res.send(result);
})