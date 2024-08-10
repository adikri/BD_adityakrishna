let express = require('express');
let app = express();

let PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on: ", PORT);
})

//q1

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumbers (number) {
    return number % 2 === 0;
}

app.get("/even-numbers", (req, res) => {
    let evenNumbers = numbers.filter(nums => filterEvenNumbers(nums));
    res.json(evenNumbers);
})

//q2

let ages = [10, 20, 30, 15, 17, 25];

function filterAges(age){
    return age > 18;
}

app.get("/adult-ages", (req, res) => {
    let adultAges = ages.filter( age => filterAges(age));
    res.json(adultAges);
})

//q3

let words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];

function filterLongWords (word, filterParam) {
    return word.length > filterParam;
}

app.get("/long-words", (req, res) => {
    let longWords = words.filter( word => filterLongWords(word, 5));
    res.json(longWords);
})

//q4

let filesSize = [50, 200, 75, 120, 30, 90, 150];

function filterSmallFiles (filesSize, filterParam) {
    return filesSize < filterParam;
}

app.get("/small-files", (req, res) => {
    let filterParam = parseFloat(req.query.filterParam);
    let smallFiles = filesSize.filter( filesSize => filterSmallFiles(filesSize, filterParam));
    res.json(smallFiles);
})