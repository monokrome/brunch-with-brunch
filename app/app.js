
var hello = require('scripts/helloWorld').hello;

hello();
console.log('hello', hello());

window.onload = function() {
  hello();
  console.log('hello onload', hello());
}

$(document).ready(function(){
  hello();
  console.log('hello ready', hello());
  $('#hello').text(hello() + 'ready');
});