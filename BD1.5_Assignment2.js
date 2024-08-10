let express = require('express');
let cors = require('cors');

const app = express();
app.use(cors());

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on: ", PORT);
})

app.get("/", (req, res) => {
    res.send("Welcome to stock portfolio analysis API");
})

//ep1
app.get("/calculate-returns", (req, res) => {
    let boughtAt = parseFloat(req.query.boughtAt);
    let marketPrice = parseFloat(req.query.marketPrice);
    let quantity = parseInt(req.query.quantity);
    let returns = (marketPrice - boughtAt) * quantity;
    res.send(returns.toString());
})

//ep2
app.get("/total-returns", (req, res) => {
    let stock1 = parseFloat(req.query.stock1);
    let stock2 = parseFloat(req.query.stock2);
    let stock3 = parseFloat(req.query.stock3);
    let stock4 = parseFloat(req.query.stock4);
    let totalReturns = stock1 + stock2 + stock3 + stock4;
    res.send(totalReturns.toString());
})

//ep3
app.get("/calculate-return-percentage", (req, res) => {
    let boughtAt = parseFloat(req.query.boughtAt);
    let returns = parseFloat(req.query.returns);
    let returnPercentage = (returns / boughtAt) * 100;
    res.send(returnPercentage.toString());
})

//ep4
app.get("/total-return-percentage", (req, res) => {
    let stock1 = parseFloat(req.query.stock1);
    let stock2 = parseFloat(req.query.stock2);
    let stock3 = parseFloat(req.query.stock3);
    let stock4 = parseFloat(req.query.stock4);
    let totalReturnPercentage = stock1 + stock2 + stock3 + stock4;
    res.send(totalReturnPercentage.toString());
})

//ep5
app.get("/status", (req, res) => {
    let returnPercentage = parseFloat(req.query.returnPercentage);
    let result = ""
    if (returnPercentage > 0) {
        result = "Profit";
    }else {
        result = "Loss";
    }
    res.send(result);
})