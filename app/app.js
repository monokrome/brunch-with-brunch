
var hello = require('scripts/helloWorld').hello;

console.log('hello', hello());

window.onload = function() {
  console.log('hello onload', hello());


}