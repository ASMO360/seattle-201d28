'use strict';
var score = 0;
console.log('score', score);

function questionOne() {
  var userName = prompt('Hello! What is your name?');
  alert ('Hi ' + userName + '!');
  console.log('userName', userName);
}
questionOne();

function questionTwo() {
  var myName = prompt('Let\'s play a guessing game! Is my name Victoria?');
  myName = myName.toLowerCase();
  if(myName === 'yes' || myName === 'y') {
    console.log('true', myName);
    alert('You are correct!');
    score++;
  } else {
    console.log('false', myName);
    alert('You are wrong!');
  }
}
questionTwo();

function questionThree() {
  var favMovie = prompt('Is LOTR: Return of the King my favorite movie?');
  favMovie = favMovie.toUpperCase();
  if(favMovie === 'YES' || favMovie === 'Y') {
    console.log('true', favMovie);
    alert('Fuck yes it is! #EowynForever');
    score++;
  } else {
    console.log('false', favMovie);
    alert('Fool of Took! Of course it is!');
  }
}
questionThree();

function questionFour() {
  var favTV = prompt('Will I wither away and die if I don\'t have coffe before this class?');
  favTV = favTV.toLowerCase();
  if(favTV === 'yes' || favTV === 'y') {
    console.log('true', favTV);
    alert('Time for a refill. You are correct!');
    score++;
  } else {
    console.log('false', favTV);
    alert('Dead. Wrong.');
  }
}
questionFour();

function questionFive() {
  var favBook = prompt('Is my favorite sci-fi book Dune?');
  favBook = favBook.toLowerCase();
  if(favBook === 'no' || favBook === 'n') {
    console.log('true', favBook);
    score++;
    alert('You are right! My favorite sci-fi book is The Hitchhikers Guide to the Galaxy. Please don\'t forget your towel and DON\'T PANIC.');
  } else {
    console.log('false', favBook);
    alert('You are wrong. But, Don\'t Panic!! My favorite sci-fi book is The Hitchhikers Guide to the Galaxy.');
  }
}
questionFive();

function questionSix() {
  var currentGame = prompt('Am I currently playing Zelda BOTW?');
  currentGame = currentGame.toLowerCase();
  if(currentGame === 'yes' || currentGame === 'y') {
    console.log('true', currentGame);
    alert('Correct! I need all the korok seeds!');
    score++;
  } else {
    console.log('false', currentGame);
    alert('Wrong, I am! You should,too.');
  }
}
questionSix();

function questionSeven() {
  for (var i=0; i<4; i++){
    var favNumber = prompt('Please guess what year I graduated high school.');
    console.log(favNumber[i]);
    if(favNumber === '2007') {
      console.log('true', favNumber);
      alert('You are correct!');
      score++;
      break;
    } else if (favNumber > 2007) {
      console.log('too high', favNumber);
      alert('That number was too high, try again');
    } else if (favNumber < 2007) {
      console.log('too low', favNumber);
      alert('That number was too low, try again');
    } else {
      console.log('false', favNumber);
      alert('Wrong, you have 4 total attempts');
    }
  }
}
questionSeven();

function questionEight() {
  var visited = ['twin peaks', 'the x-files', 'sherlock', 'black mirror', 'firefly', 'game of thrones'];
  // for (var j=6; j>0; j--){
  for(var j = visited.length; j > 0; j--) {
    var guessVisited = prompt('Please guess one of my favorite TV shows.').toLowerCase();
    //  guessVisited = 'the x-files'
    console.log(guessVisited[j]); // ->
    if(visited.includes(guessVisited)){
      console.log('visited', visited);
      alert('Wow! You are correct!');
      score++;
      break;
    } else {
      console.log('false', guessVisited);
      alert('Wrong, try again. You have 6 total attempts');
    }
  }
}
questionEight();

alert('Just so you know, some of my favorite shows are: Twin Peaks, The X-Files, Sherlock, Black Mirror, Game of Thrones and Firefly.');
alert('Out of my 7 questions you got ' + score + ' correct. Thanks for playing.');
