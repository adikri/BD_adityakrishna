let express = require("express");
let cors = require("cors");

let app = express();
app.use(cors());

let PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on: ", PORT);
})

//server-side values
let taxRate = 5;
let discountPercentage = 10;
let loyaltyRate = 2;

//ep1
app.get("/cart-total", (req, res) => {
    let newItemPrice = parseFloat(req.query.newItemPrice);
    let cartTotal = parseFloat(req.query.cartTotal);
    let totalCartPrice = cartTotal + newItemPrice;
    res.send(totalCartPrice.toString());
})

//ep2
app.get("/membership-discount", (req, res) => {
    let cartTotal = parseFloat(req.query.cartTotal);
    let isMember = req.query.isMember;
    let discountedPrice = 0;
    if (isMember === "true") {
        discountedPrice = cartTotal - (cartTotal * discountPercentage/100);
    }else {
        discountedPrice = cartTotal;
    }

    res.send(discountedPrice.toString());
})

//ep3
app.get("/calculate-tax", (req, res) => {
    let cartTotal = parseFloat(req.query.cartTotal);
    let taxAmount = cartTotal * taxRate/100;
    res.send(taxAmount.toString());
})

//ep4
app.get("/estimate-delivery", (req, res) => {
    let shippingMethod = req.query.shippingMethod;
    let distance = parseFloat(req.query.distance);
    let deliveryDays = 0;
    if (shippingMethod === "standard") {
        deliveryDays = distance/50;
    }else if (shippingMethod === "express") {
        deliveryDays = distance/100;
    }
    res.send(deliveryDays.toString());
})

//ep5
app.get("/shipping-cost", (req, res) => {
    let weight = parseFloat(req.query.weight);
    let distance = parseFloat(req.query.distance);
    let shippingCost = weight * distance * 0.1;
    res.send(shippingCost.toString());
})

//ep6
app.get("/loyalty-points", (req, res) => {
    let purchaseAmount = parseFloat(req.query.purchaseAmount);
    let loyaltyPoints = loyaltyRate * purchaseAmount;
    res.send(loyaltyPoints.toString());
})