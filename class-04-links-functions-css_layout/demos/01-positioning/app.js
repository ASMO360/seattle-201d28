'use strict';

var ten = 10;

function speak(name) {
  console.log('hello', name);
}
speak('Josh');

function foo() {
  console.log('hello world');
  // return undefined; <- implicite line of code in all functions
}

var x = 25;

function addToTen(num) {
  var x = 10;
  return ten + num;
}
console.log('above', x);
addToTen(25);

console.log('below', x);


function sayHello(name, age) {
  var x = 55;
  function speak() {
    console.log('hello', name);
  }
  function sayAge() {
    console.log('you are ' + age + ' old!');
  }

  speak()
  sayAge()
}

// sayAge() <- will throw error