let express = require('express');

let app = express();

let PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:", PORT)
})

app.get("/name", (req, res) => {
    let myName = (req.query.name).toUpperCase();
    // console.log(myName);
    res.send(myName)
})

app.get("/fullname", (req, res) => {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    let fullName = firstName +" "+ lastName;
    // console.log(fullName);
    res.send(fullName);
})

app.get("/date", (req, res) => {
    let month = req.query.month;
    let year = req.query.year;
    let date = month + ", " + year;
    res.send(date);
})

app.get("/greet", (req, res) => {
    let name = req.query.name;
    let greeting = "Namaste, " + name + "!";
    res.send(greeting);
})

app.get("/address", (req, res) => {
    let street = req.query.street;
    let city = req.query.city;
    let state = req.query.state;

    let address = street + ", " + city + ", " + state;
    res.send(address);
})

app.get("/email", (req, res) => {
    let username = req.query.username;
    let domain = req.query.domain;
    let emailaddress = username + "@" + domain;
    res.send(emailaddress);
})