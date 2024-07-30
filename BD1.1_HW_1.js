let express = require('express');
let app = express();
let PORT = 3000;

// console.log("Server running on port: " + PORT);

app.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
})

app.get("/whisper", (req, res) => {
    let name = req.query.name;
    let lowercaseName = name.toLowerCase();
    res.send(lowercaseName);
})

app.get("/fullProductName", (req, res) => {
    let companyName = req.query.companyName;
    let productName = req.query.productName;
    let fullProductName = companyName + " " + productName;
    res.send(fullProductName);
})

app.get("/date", (req, res) => {
    let month = req.query.month;
    let year = req.query.year;
    let formattedDate = month + "/" + year;
    res.send(formattedDate);
})

app.get("/greet", (req, res) => {
    let city = req.query.city;
    let greeting = "You live in " + city;
    res.send(greeting);
})

app.get("/capital", (req, res) => {
    let capital = req.query.capital;
    let country = req.query.country;
    let countryCapital = capital + " is the capital of " + country;
    res.send(countryCapital);
})

app.get("/email", (req, res) => {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    let domain = req.query.domain;
    let email = firstName + "." + lastName + "@" + domain;
    res.send(email);
})