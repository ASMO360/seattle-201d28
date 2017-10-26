<a id="top"></a>

# Class 3: HTML Lists, Control Flow with JS, and the CSS Box Model

### Overview
Class 3 is a big conceptual day, and usually the first day for serious cracks to appear in the knowledge that the students were supposed to acquire via the prework. In particular, concepts in control flow cause the most trouble because of how the various structures can be applied to similar problems (doing the same task with an ‘if’ or a ‘while’, for instance). Infinite loops are inevitable and always cause a lot of frustration. Also provide an introduction to truthy/falsy conditions (probably best done by listing the falsy cases alone; all else is truthy).

Introduction to the CSS box model also exposes potential weaknesses in knowledge and concepts from the prework; furthermore, the integration with the developer tools in Chrome and also the necessity of understanding pixels as a measurement unit adds a new layer of complexity to what the students have already seen.

### Class 3 Lecture: HTML Lists, Control Flow with JS, and the CSS Box Model
* Code Review
* Review of Reading Assignments:
  * Important points for each chapter
    * HTML/CSS book, Ch. 3, “Lists”
      * p.65: Ordered/numbered lists
      * p.66: Unordered/bullet lists
      * p.67: Definition lists
      * p.68: Nested lists
        * Students might not immediately see the value of organizing a webpage with lists. Navigate to a website (espn.com is a good example) and remove the styling to demonstrate that many websites use lists and the layout is all CSS. This will help clarify the point that both HTML and CSS are valuable for their intended purposes.
    * HTML/CSS book, Ch. 13, “Boxes”
      * p.303: Box width, height, overflow
      * p.307: Border, margin, & padding
        * Demonstrate this section using a tool like [CodePen](https://codepen.io/pen/) to show real-time changes
        * Provide students with acronym for remembering the order of arguments:
          * "Trouble" aka TRBL = top, right, bottom, left
      * p.308: Border width, style, & color
      * p.315: Centering content
      * p.317: Changing inline/block
      * p.318: Visibility
        * Point out the difference between `display: none` and `visibility: hidden`
      * p.321: Additional border topics (border images, box shadow, border radius)
    * JavaScript book, Ch. 4, “Decisions and Loops”
      * p.148: Decision making
      * p.149: Evaluating conditionals & conditional statements
      * p.150: Comparison operators: evaluating conditions
      * p.152: Structuring comparison operators
      * p.156: Logical operators
        * Demonstrate the difference between evaluating an expression with `&&` compared to `||`
      * p.160: ‘If’ statements
      * p.162: ‘If...else’ statements
      * p.164: ‘Switch’ statements
      * p.166: Type coercion and weak typing
      * p.167: Truthy & falsy values
      * p.168: Checking equality & existence
      * p.169: Short circuit values
      * p.170: Loops & loop counters
      * p.172: Looping
      * p.174: Key loop concepts (‘break’, ‘continue’)
      * p.175: Using ‘for’ loops
      * p.176: Using ‘while’ loops
      * p.177: Using ‘do...while’ loops
* Live Code Demo
  * This is a good opportunity to expose students to helpful online tools, if not already exposed
    * [Code Pen](https://codepen.io/pen/)
    * [repl.it](https://repl.it/languages/javascript)
  * Avoid introducing `typeof` and `parseInt` today. Allow students the opportunity to discover the solution on their own or seek out advice from their peers or the instructional team.
  * It can be helpful to approach the demonstrations in pseudocode first. This serves two purposes: walking through the logic at a higher level, and showing students how to write pseudocode.

```javascript
  for(starting val; condition; increment) {
    do something for a finite number of times
  }
```
```javascript
  while(true) {
    do something until the condition is false
  }
```
```javascript
  do {
    do this at least once and until the condition is false
  } while (condition)
```


[-top-](#top)

### Class 3 Lab: Extend your ‘About Me’ Page and Guessing Game
The goal for today is to get the students comfortable working with the entire toolchain.

Point out that the technical requirements carry over from any prior labs for each week. For example, they are responsible for the tasks of lab 2 in addition to the tasks assigned in lab 3.

This lab provides a great opportunity for the instructional staff to help students work through their debugging process in the Chrome console and using console.log messages. The instructional staff should also make sure to ask students to explain what they are attempting to accomplish so students get used to talking about their code.

[-top-](#top)
