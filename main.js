
const http = require('http');
const _ = require('lodash');

const items = [1, [2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);









// const server = http.createServer((req, res) => {
//     if (req.url === '/' || req.url === '') {
//         res.end('I am Certainly the Home Page');
//     } 
//     if (req.url === '/about') {
//         res.end('Here is the About page!!');
//     }
//     res.end(`
//     <h1>Oops!</h1>
//     <p>seems we cant find the page you are looking for</p>
//     <a href="/">Back to Home Page</a>`);
// })


// server.listen(3000);