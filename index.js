const fs = require('fs');
const data = require('./data.json');
const notes = data['notes'];
let nextId = data['nextId'];
const input = process.argv[3]



fs.readFile('data.json', 'utf8', (data) => {
  if (process.argv[2] === 'read') {
    for (const property in notes) {
    console.log(`${property}` + ': ' + notes[property]);
    }
  } else if (process.argv[2] === 'add') {
    notes.nextId = input;
  }

})
