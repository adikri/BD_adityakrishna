let express = require('express');
let app = express();

let PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on: " + PORT);
})

//q1
function getWelcomeMessage () {
    return "Welcome to our service!";
}

app.get("/welcome", (req, res) => {
    res.send(getWelcomeMessage());
})

//q2
function getGreetingMessage (username){
    return "Hello, " + username + "!";
}

app.get("/greet", (req, res) => {
    let username = req.query.username;
    res.send(getGreetingMessage(username));
})

//q3
function checkPasswordStrength (password){
    let passwordLength = password.length;
    if(passwordLength > 15){
        return "Password is strong";
    }else {
        return "Password is weak";
    }
}

app.get("/check-password", (req, res) => {
    let password = req.query.password;
    res.send(checkPasswordStrength(password));
})

//q4
function getSum(num1, num2){
    return num1 + num2;
}

app.get("/sum", (req, res) => {
    let num1 = parseFloat(req.query.num1);
    let num2 = parseFloat(req.query.num2);
    res.send(getSum(num1, num2).toString());
})

//q5
function getSubscriptionStatus(username, isSubscribed){
    if(isSubscribed === "true"){
        return username + " is subscribed"; 
    }else{
        return username + " is not subscribed";
    }
}

app.get("/subscription-status", (req, res) => {
    let username = req.query.username;
    let isSubscribed = req.query.isSubscribed;
    res.send(getSubscriptionStatus(username, isSubscribed));
})

//q6
function getDiscountedPrice (price, discount) {
    let discountedPrice = price - (price * discount/100);
    return discountedPrice;
}

app.get("/discounted-price", (req, res) => {
    let price = parseFloat(req.query.price);
    let discount = parseFloat(req.query.discount);
    res.send(getDiscountedPrice(price, discount).toString());
})

//q7
function getPersonalizedGreeting (age, gender, name) {
    return "Hello, " + name + "! You are a " + age + " year old " + gender + ".";
}

app.get("/personalized-greeting", (req, res) => {
    let age = parseInt(req.query.age);
    let gender = req.query.gender;
    let name = req.query.name;

    res.send(getPersonalizedGreeting(age, gender, name));
})

//q8
function getFinalPrice (price, discount, tax) {
    let discountedPrice = price - (price * discount/100);
    let finalPrice = discountedPrice + (discountedPrice * tax/100);
    return finalPrice;
}

app.get("/final-price", (req, res) => {
    let price = parseFloat(req.query.price);
    let discount = parseFloat(req.query.discount);
    let tax = parseFloat(req.query.tax);
    res.send(getFinalPrice(price, discount, tax).toString());
})

//q9
function getTotalExerciseTime (running, cycling, swimming) {
    return running + cycling + swimming;
}

app.get("/total-exercise-time", (req, res) => {
    let running = parseInt(req.query.running);
    let cycling = parseInt(req.query.cycling);
    let swimming = parseInt(req.query.swimming);
    res.send(getTotalExerciseTime(running, cycling, swimming).toString());
})