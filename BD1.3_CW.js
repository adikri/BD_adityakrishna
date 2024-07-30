let express = require('express');
let app = express();
let PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is running on: ", PORT);
})

//q1
app.get("/check-number", (req, res) => {
    let number = parseFloat(req.query.number);
    let result = "";
    
    if (number > 0){
        result = "Number is positive";
    } else {
        result = "Number is negative";
    }

    res.send(result);
})

//q2
app.get("/check-even-odd", (req, res) => {
    let number = parseInt(req.query.number);
    let result = "";

    if(number % 2 === 0){
        result = "Number is even";
    }else{
        result = "Number is odd";
    }
    
    res.send(result);
})

//q3
app.get("/check-login", (req, res) => {
    let isLoggedIn = req.query.isLoggedIn;
    let result = "";
    
    if(isLoggedIn === "true"){
        result = "User is logged in";
    }else{
        result = "User is not logged in";
    }

    res.send(result);
})

//q4
app.get("/check-discount", (req, res) => {
    let age = parseInt(req.query.age);
    let result = "";
    
    if(age > 65){
        result = "User is eligible for a discount";
    }else{
        result = "User is not eligible for a discount";
    }
    
    res.send(result);
})

//q5
app.get("/check-number-type", (req, res) => {
    let number = parseFloat(req.query.number);
    let result = "";

    if(number > 0){
        result = "Number is positive";
    }else if (number < 0){
        result = "Number is negative";
    }else{
        result = "Number is zero";
    }

    res.send(result);
})

//q6
app.get("/check-temperature", (req, res) => {
    let temperature = parseFloat(req.query.temperature);
    let result = "";

    if(temperature < 15){
        result = "Temperature is cold";
    }else if(temperature <= 25){
        result = "Temperature is warm";
    }else {
        result = "Temperature is hot";
    }

    res.send(result);
})

//q7
app.get("/check-activity-level", (req,res) => {
    let steps = parseInt(req.query.steps);
    let result = "";

    if(steps < 5000){
        result = "Activity level is low";
    }else if(steps < 10000){
        result = "Activity level is moderate";
    }else{
        result = "Activity level is high";
    }

    res.send(result);
})

//q8
app.get("/check-engagement", (req, res) => {
    let likes = parseInt(req.query.likes);
    let result = "";

    if(likes < 100){
        result = "Engagement level is low";
    }else if(likes < 500){
        result = "Engagement level is medium";
    }else{
        result = "Engagement level is high";
    }

    res.send(result);
})

