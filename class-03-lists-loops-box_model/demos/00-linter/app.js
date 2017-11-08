'use strict';

var num = 3 // <- Linter issue: no semi colon

if(num === 3) {
  console.log('true');
}

if(true) {
  console.log(false); // <- Linter issue: No use of constant values
}