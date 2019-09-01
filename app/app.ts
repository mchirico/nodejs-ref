const fs = require('fs');

fs.writeFileSync('note.txt','This is a test');
try {
    fs.appendFileSync('note.txt', 'data to append');
    console.log('The "data to append" was appended to file!');
  } catch (err) {
    /* Handle the error */
    console.log('Data was not appended');
  }

