// Object literal
var emptyObj = {}; // empty obj

var bill = {
  name: 'bill',
};
var stella = {
  name: 'stella',
};
var laura = {
  name: 'laura',
};

var person = {
  age: 34,
  name: 'scott',
  children: [bill, stella, laura],
};

// Objects will not maintain order of property names
// var person = {
//   age: 34,
//   children: (3)[{ … }, { … }, { … }],
//   name: "scott",
// }

// Object methods
var turtle = {
  name: 'Leo',
  details: {
    speed: 3, // 0-9
    breed: 'snapping',
    color: 'blue',
    size: 32,
    doesSwim: true,
  },
  weapon: 'katana',
  ninja: true,
  sayHello: function() {
    console.log('Hello, my name is ' + this.name + ', and I am a ' + this.details.breed + ' turtle');
  },
};

function sayHello() {
  console.log('Hello my name is ', turtle.name);
}

// Working with the DOM
