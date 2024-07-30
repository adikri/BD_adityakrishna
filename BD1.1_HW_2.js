let express = require('express');
let app = express();
let PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is running on: ", PORT);
})

app.get("/custom-commit", (req, res) => {
    let type = req.query.type;
    let message = req.query.message;
    let customCommmit = type + ":" + message;
    res.send(customCommmit);
})

app.get("/certificate", (req, res) => {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    let courseName = req.query.courseName;
    let certificate = "This certification is awarded to " + firstName + " " + lastName + " for completing the course " + courseName;
    res.send(certificate);
})

app.get("/autoreply", (req, res) => {
    let startMonth = req.query.startMonth;
    let endMonth = req.query.endMonth;
    let autoreply = "Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from " + startMonth + " till " + endMonth + ". Your enquiry will be resolved by another colleague."; 
    res.send(autoreply);
})

app.get("/secureurl", (req, res) => {
    let domain = req.query.domain;
    let secureurl = "https://" + domain;
    res.send(secureurl);
})

app.get("/sendotp", (req, res) => {
    let otpCode = req.query.otpCode;
    let sendotp = "Your OTP for account verification is " + otpCode + ". Do not share this with anyone";
    res.send(sendotp);
})

app.get("/welcome", (req, res) => {
    let firstName = req.query.firstName;
    let email = req.query.email;
    let welcomeMsg = "Hey " + firstName + ". We're excited to have you here, we'll send future notifications to your registered mail (" + email + ")"
    res.send(welcomeMsg);
})

app.get("/github-profile", (req, res) => {
    let username = req.query.userName;
    let githubProfile = "https://github.com/"+ username
    res.send(githubProfile);
})

app.get("/text-to-csv", (req, res) => {
    let id = req.query.id;
    let email = req.query.email;
    let rollNumber = req.query.rollNumber;
    let text2csv = id + "," + email + "," + rollNumber;
    res.send(text2csv);
})