let express = require('express');
let app = express();

let PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on: ", PORT);
})

//q1

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function isPrime(num){
    if (num <= 1){
        return false;
    }
    for (let i = 2; i < num; i++){
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function filterPrimeNumbers (num) {
    return isPrime(num);
}

app.get("/prime-numbers", (req, res) => {
    let primeNumbers = numbers.filter(num => filterPrimeNumbers(num));
    res.json(primeNumbers);
})

//q2

let numsPositiveNegative = [-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

function filterPositiveNumbers (number) {
    return number > 0;
}

app.get("/positive-numbers", (req, res) => {
    let positiveNumbers = numsPositiveNegative.filter( number => filterPositiveNumbers(number));
    res.json(positiveNumbers);
})

//q3

function filterNegativeNumbers (number) {
    return number < 0;
}

app.get("/negative-numbers", (req, res) => {
    let negativeNumbers = numsPositiveNegative.filter( number => filterNegativeNumbers(number));
    res.json(negativeNumbers);
})

//q4

function filterOddNumbers (number) {
    return number % 2 !== 0;
}

app.get("/odd-numbers", (req, res) => {
    let oddNumbers = numbers.filter( number => filterOddNumbers(number));
    res.json(oddNumbers);
})

//q5

function filterNumbersGreaterThan (number, filterParam) {
    return number > filterParam;
}

app.get("/numbers-greater-than", (req, res) => {
    let value = parseFloat(req.query.value);
    let numbersGreaterThan = numbers.filter( number => filterNumbersGreaterThan(number, value));
    res.json(numbersGreaterThan);
})

//q6

function filterNumbersLessThan (number, filterParam) {
    return number < filterParam;
}

app.get("/numbers-less-than", (req, res) => {
    let value = parseFloat(req.query.value);
    let numbersLessThan = numbers.filter( number => filterNumbersLessThan(number, value));
    res.json(numbersLessThan);
})