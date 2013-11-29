
var hello = require('scripts/helloWorld').hello;

console.log(hello());

window.onload = function() {
  document.getElementById('hello').innerText = hello();
}