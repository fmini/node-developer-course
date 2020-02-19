const fs = require('fs');
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const parsedData = JSON.parse(dataJSON);

console.log(`dataBuffer: ${dataBuffer}`);
console.log(`dataJSON: ${dataJSON}`);
console.log(`parsedData.name: ${parsedData.name}`);

parsedData.name ="Frank";
parsedData.age = 49;

newData = JSON.stringify(parsedData);

fs.appendFileSync('1-json.json', newData)
