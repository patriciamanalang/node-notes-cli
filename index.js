const fs = require('fs');
const data = require('./data.json');
const notes = data['notes'];
// const numbers = notes['1'];

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    // console.log(data);
    for (var property in notes) {
    console.log(property);
    }
  }
})
