
var hello = require('scripts/helloWorld').hello;

console.log(hello());

document.getElementById('hello').innerText = hello();
