const fs = require('fs');
const data = require('./data.json');
const notes = data['notes'];
let nextId = data['nextId'];
const input = process.argv[3];
console.log(data);


if (process.argv[2] === 'read') {
  fs.readFile('data.json', 'utf8', (data) => {
    for (const property in notes) {
    console.log(`${property}` + ': ' + notes[property]);
    }
  })
  } else if (process.argv[2] === 'add') {
  data.notes[data.nextId] = input;
  data.nextId++;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', (err) =>  {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
  } else if (process.argv[2] === 'delete') {
    const input = process.argv[3];
    delete data.notes[input];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', (err) => {
      if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(data);
    })
  } else if (process.argv[2] === 'update') {
      const input = process.argv[3];
      data.notes[process.argv[3]] = process.argv[4]
      // delete data.notes[input];
      // data.notes[data.nextId] = input;
      // data.nextId++;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    })
    console.log(data);
}
