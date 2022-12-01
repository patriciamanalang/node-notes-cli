const fs = require('fs');
const data = require('./data.json');
const notes = data['notes'];
let nextId = data['nextId'];



fs.readFile('data.json', 'utf8', (err, data) => {
  // if (err) {
  //   console.error(err);
  //   process.exit(1);
  // }
  if (process.argv[2] === 'read') {
    for (const property in notes) {
    console.log(`${property}` + ': ' + notes[property]);
    }
  } else if (process.argv[2] === 'add') {
    data.nextId = process.argv[3];
  }

})
