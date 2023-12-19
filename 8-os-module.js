

const os = require('os'); //default module os

//info about current user
console.log(os.userInfo())

// method returns uptime in seconds
console.log(os.uptime())

const currentOS ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);