const { Console } = require('console');
const { default: test } = require('node:test');
const path = require('path');

 console.log(path.sep)   // get system path seperator

 const filePath = path.join('/content', 'subfolder', 'test.txt');
 console.log(filePath)


 const base = path.basename(filePath)
 console.log(base)


 const absolut = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')  // get absolute path
 console.log(absolut)