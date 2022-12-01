const fs = require('fs');
const data = require('./data.json');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log(data);
  }
})
