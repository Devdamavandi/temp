

const { log } = require('console');
const { readFile, appendFile } = require('fs');
console.log('start');
readFile('./content/first.txt', 'utf8', (err, first) => {
  if (err) {
    log('Error reading first file:', err);
    return;
  }

  readFile('./content/subfolder/second.txt', 'utf8', (err, second) => {
    if (err) {
      log('Error reading second file:', err);
      return;
    }

    log(first + '\n' + second);

    appendFile('./content/result-async.txt', `Here is the result: ${first} ${second}`, 'utf8', (err) => {
      if (err) {
        log('Error writing to second file:', err);
        return;
      }
      console.log('done with this');
      log('added successfully!');
    });
  });
});
console.log('starting with the next');
