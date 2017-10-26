<a id="top"></a>
# Class 6: The DOM, Domain Modeling, and Introduction to Objects

### Overview

There are three big concepts to cover today:
* Domain modeling. This process for learning how to code solutions to real-world problems is key to effective practical programming. It all comes down to how the problem is organized and defined. It is important to stress that there is no substitute for good planning, and also that if a problem seems too big to effectively define, then it needs to be broken down more. There are two articles on this subject, [one by a former Code Fellows instructor (Ryan Sobol)](https://github.com/codefellows/domain_modeling#domain-modeling) and another by [a tech education entrepreneur](https://simpleprogrammer.com/2013/07/15/understanding-the-problem-domain-is-the-hardest-part-of-programming/). It’s a good time to talk about some business parts of the tech industry and the basic economics of how people get paid to do this work.
* The Document Object Model (DOM). This is where HTML and JS truly unite, and it is incredibly powerful. Students typically have a big “Whoa!” moment the first time they see that it is possible to use JS to create HTML where none existed before. Be sure to stress the “Elements” tab in the Chrome Dev Tools, and also how to use the JS console and its autocomplete functionality to explore the many different DOM manipulation and traversal methods.
* Object literals. The key to this is to not allow the students to use constructors at all today. Make them build, by hand, a bunch of object literals to become familiar with the syntax and structure, and demonstrate/encourage practicing how to access and modify properties/methods in the JS console. We’ll transition to constructor functions Tuesday. Reiterate that the goal with JS objects is to model real-life entities that have characteristics (properties) and behaviors (methods). It also helps to tie to grammar, and describe properties as nouns, the values as adjectives, and methods as verbs.

### Class 6 Lecture: The DOM, Domain Modeling, and Introduction to Objects
* Weekly Survey Feedback
  * Highlight any pieces of common feedback or anything that stands out
* Code Review
  * Discuss lab 5, asking students to mention any struggles they encountered with this lab. This can include failing tests, syntax errors, and GitHub workflow issues.
  * Demonstrate how to solve the problems from the lab, without going into too much detail about every single line, as each student should have completed the lab by now, or at least submitted what they had completed. It is more important to discuss WHY the solutions are written the way they are and emphasize the ability to access return values with bracket notation. This is also their first exposure to callbacks, so point out that the inner function will evaluate first, then be used as an argument to the outer function, as in the `sumAndMultiply` and `sumArray` functions.
  * Some students may have solved these problems in a different way. It is okay to discuss these, but avoid going down rabbit holes.
* Domain Modeling Article - 1 (Sobol)
  * Domain modeling is the process of creating a conceptual model for a specific problem. And a domain model that's articulated well can verify and validate your understanding of that problem.
  * Here's some tips to follow when building your own domain models:
    * When modeling a single entity that'll have many instances, build self-contained objects with the same attributes and behaviors.
    * Model its attributes with a constructor function that defines and initializes properties.
    * Model its behaviors with small methods that focus on doing one job well.
    * Create instances using the `new` keyword followed by a call to a constructor function.
    * Store the newly created object in a variable so you can access its properties and methods from outside.
    * Use the this variable within methods so you can access the object's properties and methods from inside.
* Domain Modeling Article - 2 (Sonmez)
  * Why problem domains are hard
  * Programming is easy if you understand the problem domain
* JavaScript book, Ch. 3, "Functions, Objects, and Methods"
  * p.101: Object literal notation
    * New terminology: property, key, value, method
  * p.102: Accessing an object and dot notation
    * Show how to access using `object.propertyName` and `object['propertyName']` to demonstrate that dot notation is faster and more common
    * This page is the first encounter with `this`, explained on page 108
  * p.106: Creating an object: constructor notation
  * p.107: Updating an object
  * p.108-112: Creating many objects: constructor notation (‘this’ explained on p.108)
  * p.118: Arrays are objects
    * The key for each value is its index number
  * p.119: Arrays of objects & objects in arrays
  * p.120: What are built-in objects?
    * We introduced `String.toUpperCase` last week, for example
    * Math
    * Date
  * p.124: Window object
  * p.126: Document object
  * p.128: String object
  * p.130: Working with strings (concatenation)
  * p.132: Number object
  * p.134: Math object
    * Of particular interest: `Math.random()`, `Math.floor()`, `Math.ceil()`, `Math.round`
* JavaScript book, Ch. 5, "The Document Object Model"
  * p.186: The DOM tree is a model of a web page (diagram on p.187)
    * Show what happens when typing `document` in the browser console as an illustration
  * p.188: Overview working with the DOM tree (accessing elements, setting values, create, attributes)
  * p.190: Caching DOM queries (i.e. variables)
  * p.192: Accessing elements
  * p.196: Nodelists: DOM queries that return more than one element
  * p.208: Traversing the DOM
  * p.212: How to get/update element content
  * p.236: Examining the DOM in Chrome
* Code Demo

[-top-](#top)

### DOM Interactions
These are the most used and common methods for interacting with the DOM:  
* Getters: // Document or element methods:  
  * document.getElementById(); //returns a single element;
  * document.getElementsByClassName(); //returns an array of elements with same class;  
  * document.getElementsByTagName(); //returns an array of elements by tag;  
  * document.querySelectorAll(`some css shiz`) //returns an array of element nodes.   
* Elements:  
  * document.createElement('div') //returns a new 'div' element with the provided string.  
  * `element`.children //returns all of the element's children with their own corresponding children.  
  * `element`.parentElement // refers to the `element`'s parent element.  
  * `element`.appendChild(`element`) //puts the element arg and pushes it to the end of its children.  
  * `element`.removeChild(`child element`) //takes in the child element node to remove.  
  * `element`.insertBefore(`new element`, `existing element`); //inserts a new element before the 2nd parameter.  

* Steps:
1. Make a JavaScript reference (a variable) to the parent element
2. Create the child element we want to add and save it as a variable
3. Give the child content - in this case, the content is text
4. Append the child to the parent

[-top-](#top)

### Class 6 Lab: Get Started on the Salmon Cookies project

Like last week, this week's lab will carry through the entire week. For today, students are only permitted to use object literal notation, NO constructors. There will likely be students who want to use constructors, so make sure they wait until lab 7 to do so.

This is the first exposure to problem domains and having to build something from specific specs and sample data. Take time to walk through the problem domain as a class and highlight specific items to pay attention to. For example, they are given a few pieces of data but need to come up with the logic for the other technical requirements.

Differentiate between the content of each HTML file. The `index.html` page should be thought of as the customer-facing page containing the store locations, hours, branding, fonts, etc. The `sales.html` page should be thought of as the admin-facing page. For today, that page will hold a list of the projected sales per hour. In Tuesday's lab, that data will be converted to a table. On Wednesday, they will also add a form to this page for the admin to add new stores to the table.

This is a big lab, so encourage students to take it one piece at a time. Also encourage students to retype every object rather than copying and pasting code from one object to another. It is tempting to copy and paste in the interest of time, but the more they can type the code, the faster they'll build up muscle memory through repetition.

[-top-](#top)
