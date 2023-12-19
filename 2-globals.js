

//  __dirname - path to current directory
//  __filename - file name
//  require - function to use modules (commonJS)
//  module - info about current module
// process - info about env where the current program is being executed


console.log(__dirname);

setInterval(() =>{
    console.log("a");
}, 1000);

setTimeout(()=>{
    console.log("hello world");
}, 1000)