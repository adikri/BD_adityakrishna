let express = require('express');
let app = express();
let PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is running on: ", PORT);
})

//q1
function getWelcomeMessage () {
    return "We will now learn functions!";
}

app.get("/welcome", (req, res) => {
    res.send(getWelcomeMessage());
})

//q2
function getGreetingMessage (username) {
    return "Hey, " + username + "! Are you ready to learn functions with us?";
}

app.get("/greet", (req, res) => {
    let username = req.query.username;
    res.send(getGreetingMessage(username));
})

//q3
function checkYearsOfExp (yearsOfExp) {
    if (yearsOfExp > 0) {
        return "You have some experience with functions. Great!";
    }else {
        return "No worries. You will start writing functions in no time!";
    }
}

app.get("/message", (req, res) => {
    let yearsOfExp = parseInt(req.query.yearsOfExp);
    res.send(checkYearsOfExp(yearsOfExp));
})

//q4
function getTime (days, hours) {
    return days * hours;
}

app.get("/hours", (req, res) => {
    let days = parseInt(req.query.days);
    let hours = parseInt(req.query.hours);
    res.send(getTime(days, hours).toString());
})

//q5
function getModuleCompletion (username, hasCompleted) {
    if (hasCompleted === "true") {
        return username + " has completed the modules";
    }else {
        return username + " has not completed the modules";
    }
}

app.get("/module-completion-status", (req, res) => {
    let username = req.query.username;
    let hasCompleted = req.query.hasCompleted;
    res.send(getModuleCompletion(username, hasCompleted));
})

//q6
function getPersonalizedGreeting (city, name) {
    return "Hey, " + name + "! What's famous about " + city + "?";
}

app.get("/personalized-greeting", (req, res) => {
    let city = req.query.city;
    let name = req.query.name;
    res.send(getPersonalizedGreeting(city, name));
})

//q7
function findAge (birthyear) {
    return 2024 - birthyear;
}

app.get("/find-age", (req, res) => {
    let birthyear = parseInt(req.query.birthyear);
    res.send(findAge(birthyear).toString());
})

//q8
function findRequiredTime (days, hours) {
    let totalHours = days * hours;
    if(totalHours >= 30){
        return "The time being dedicated is sufficient for learning functions";
    }else {
        return "The time being dedicated is not sufficient for learning functions";
    }
}

app.get("/is-time-sufficient", (req, res) => {
    let days = parseInt(req.query.days);
    let hours = parseInt(req.query.hours);
    res.send(findRequiredTime(days, hours));
})
