// Reverse a string
var str = 'hello world';
var reversed = '';
for(var i = str.length; i > 0; i--) {
  // reversed = reversed + str[i]; <- Verbose syntax for line below.
  reversed += str[i];
}
console.log(reversed); // => 'dlrow olleh'


// += syntax
var num = 5;
num + 5; // => num will still have a value of 5
num = num + 5; // => num will not have a value of 10
// num += 5; <- Short-hand syntax for the line above;