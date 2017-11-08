'use strict';

// For loops
var arr = [1, 2, 3, 4];
for(var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log(i); // <- still a global variable, but defined.

for(var j = 0; j < arr.length; j += 2) {
  console.log('second loop', arr[j]);
}

// While loops
var userName = prompt('what is your name'); // <- null
// while(!userName) {
while(userName === null) {
  console.log('missed it...');
  userName = prompt('I did not get that: What is your name?');
}

console.log(userName);

var counter = 0;
while(true) {
  if(counter === 10) {
    break;
  }
  counter++;
}
console.log('counter', counter);