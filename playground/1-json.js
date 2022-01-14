#!/usr/bin/env node

const fs = require('fs');

// const book = {
//   title: 'Dune',
//   author: 'Frank Herbert'
// };

const fileName = '1-json.json';

// const bookJson = JSON.stringify(book);

const dataBuffer = fs.readFileSync(fileName);
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
data.name = "Lord Vader";
data.age = 42;
const updatedData = JSON.stringify(data);
fs.writeFileSync(fileName, updatedData);
// console.log(dataBuffer.toString());
