let express = require("express");
let app = express();
let PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is running on: ", PORT);
})

let person = {
    firstName: "Amit",
    lastName: "Sharma",
    gender: "male",
    age: 30,
    isMember: true
}

//q1

app.get("/person", (req, res) => {
    res.json(person);
})

//q2

function getFullName (person) {
    return person.firstName + " " + person.lastName;
}

app.get("/person/fullname", (req, res) => {
    let fullName = getFullName(person);
    res.json({fullName: fullName});
})

//q3

function getFirstNameAndGender (person) {
    return {
        firstName: person.firstName, 
        gender: person.gender
    };
}

app.get("/person/firstname-gender", (req, res) => {
    let firstNameAndGender = getFirstNameAndGender(person);
    res.json(firstNameAndGender);
})

//q4

function incrementAge (person) {
    person.age = person.age + 1;
    return person;
}

app.get("/person/increment-age", (req, res) => {
    let updatedPerson = incrementAge(person);
    res.json(updatedPerson);
})

//q5

function getFullNameAndMembership (person) {
    return {
        fullName: getFullName(person),
        isMember: person.isMember
    }
}

app.get("/person/fullname-membership", (req, res) => {
    let fullNameAndMembership = getFullNameAndMembership(person);
    res.json(fullNameAndMembership);
})

//q6

function getFinalPrice (cartTotal, isMember) {
    let discount = 0.10;
    let finalPrice;
    if (isMember === true) {
        finalPrice = cartTotal - (cartTotal * discount);
    } else {
        finalPrice = cartTotal;
    }
    return finalPrice.toFixed(2);
}

app.get("/person/final-price", (req, res) => {
    let cartTotal = parseFloat(req.query.cartTotal);
    let finalPrice = getFinalPrice(cartTotal, person.isMember);
    res.json({ finalPrice: finalPrice });
})

//q7

function getShippingCost (cartTotal, isMember) {
    let shippingCost;
    if (cartTotal > 500 && isMember) {
        shippingCost = 0;
    } else {
        shippingCost = 99;
    }
    return shippingCost.toFixed(2);
}

app.get("/person/shipping-cost", (req, res) => {
    let cartTotal = parseFloat(req.query.cartTotal);
    let shippingCost = getShippingCost(cartTotal, person.isMember);
    res.json({ shippingCost: shippingCost});
})