

const { log } = require('console');
const path = require('path');

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

const baseName = path.basename(filePath);
console.log(baseName);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);