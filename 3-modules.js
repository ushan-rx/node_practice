

const names = require('./4-names');
const sayHi = require('./5-utils');

const data = require('./6-alternative-flavour');  // second method

require('./7-mind-granade');  // auto run invoked function

console.log(data);
sayHi('ushan');
sayHi(names.john);
sayHi(names.peter);