const fs = require('fs');
const data = require('./data.json');
const notes = data['notes'];

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    for (var property in notes) {
    console.log(notes[property]);
    }
  }
})
