<a id="top"></a>

# Class 2: Basics of JS and HTML, including Arrays; CSS Introduction

### Overview
The first day of class is always kind of weird. Now it’s behind us. Today will establish a  pattern for the rest of the class days to follow. Class time follows this flow: Assignment code review with time for a Q&A, lecture on new material (including material covered in the readings), and then a code demo utilizing the new material. Each portion should take approximately an hour with a break of about ten minutes in between each portion. The key to being successful is to make sure that you’ve reviewed the lab assignment before class, and then be sure to touch on all of the specific pieces of that assignment that the students will need to complete it.

This first code review session is especially important, since it will be the first time for students to view each others’ code. For some students, the thought of showing their code to anyone else, much less an entire class, is nerve-wracking—so be especially patient, sensitive, and empathetic. Again, be attentive to their code’s syntax and style. Encourage students to read and explain their code to the class. You can even ask students to read and explain the code of their peers. This provides students an early opportunity to practice reading code and helps them truly understand the importance of proper syntax and style as it relates to sharing code.

It is especially important to make certain that arrays are covered today, because ideally when ‘for’ loops are covered in Class 3, students will have enough comfort with arrays to be able iterate through them.

### Class 2 Lecture: Foundations and Terminology of HTML, CSS, and JS
* Code Review
  * Why we do code review
    * Do a Google search for “why code review” for the class, skim through the articles
    * Being able to read code is an important professional skill
    * By getting more people discussing some code, it emphasizes the collaboration side of coding
  * Things we’ll do in code review
    * Look at code and practice reading code
    * Have one student show code and have another student explain it
    * Sometimes we’ll go through code line-by-line and have a different person explain each line
* Review of Reading Assignments
  * Go over the readings for today (important points broken out below)
    * HTML/CSS book, Ch. 2, “Text”
    * HTML/CSS book, Ch. 10, “Introduction to CSS”
    * JavaScript book, Ch. 2, “Basic JavaScript Instructions”
      * Good time to introduce http://repl.it
  * Important points for each chapter
    * HTML/CSS book, Ch. 2, “Text”
      * p.43: heading tags
      * p.44: paragraph tags
      * p.49: visual editors (WYSIWYG - what you see is what you get)
      * lots of little text formatting pieces throughout the chapter (bold, italic, strong, emphasis, subscript, superscript, quotes, citations, etc.)
        > Make sure students understand the concept of symantic html. In HTML4, tags like `<b>` and `<i>` are not semantic, because they define only how the text should look (bold or italic) and do not provide any additional meaning.

    * HTML/CSS book, Ch.10, “Introducing CSS”
      * p.229: Understanding CSS: Thinking inside the box (!!!)
        * The key to understanding how CSS works is to imagine that there is an invisible box around every HTML element.
      * p.230-1: How CSS associates with HTML and affects their display
        * selector vs declaration:
        ```CSS
        p { //selector
          font-family: Ariel; //property : value
        }
        ```  
      * p.235: Using external CSS
          > External CSS files are incorporated using the `<link>` tag, where internal CSS files are used with the `<style>` tag.  

      * p.237-8: CSS selectors (with VERY handy reference chart)
      * p.239: How CSS rules cascade
        * If there are two or more rules that apply to the same element, it is important to understand which will take precedence.  
        * Understanding how CSS rules cascade means you can write simpler style sheets because you can create generic rules that apply to most elements and then override the properties on individual elements that need to appear differently.  
        * If discussing the use of the `<style>` tag, point out that any CSS targeting the same element will take precedence over any styling in HTML
      * p.240: Inheritance (this might be a good place to talk about MDN as a resource and explicitly show on MDN how to [find out if a property gets inherited or not](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance))
      * p.242: Browser quirks (a good place to show [caniuse.com](http://caniuse.com/))
    * JavaScript book, Ch. 2, “Basic JavaScript Instructions”
      * p.56: statements
      * p.57: comments
        * Encourage the use of comments in a meaningful way, such as leaving a brief description of what the code is doing
        * Discourage lengthy comments
        * Discourage students from submitting code that contains large chunks of commented-out code - aka corpse code/zombie code (not quite dead, not quite alive, grey and useless) as it can distract the reader from seeing the functional code
      * p.58: variables
        * Clarify difference between declaring and assigning a value to a variable in one line vs. declaring on one line and assigning a value elsewhere
      * p.62: data types
        * This is a good time to discuss type coercion and the difference between `==` and `===`
      * p.69: rules for naming variables
        * This is a good page to point out
      * p.70-73: arrays
        * See more details below
      * p.74: expressions
      * p.75: operators (Arithmetic, p.76) (String, p.78)
        * Compare `i++` and `i += 1`
* Live Code Demo
* Learning Journals

[-top-](#top)

### Live Code Demo
* Focus on writing code based on the the assignment description and requirements
* This assignment is the first time for the students to deal with user stories, as differentiated from technical requirements, so there needs to be some explanation about how user stories and technical requirements can overlap, but also each contain unique information.

#### JavaScript Arrays

##### What is an Array?
JavaScript arrays are great for storing *related* pieces of data that are all of the same data type. Each piece of data in an array is called an *element* of the array, and it is referenced by its *index* - a numerical reference to its location within the array. Array indices always start at 0.

For example:
`var myArray = ['a', 'b', 'c'];` (point out indices 0, 1, 2)

##### Notation
We can declare arrays using array literal notation:

1. square brackets `[]`
2. elements are separated by commas
3. elements can be any data type, including other arrays
4. different data types can be mixed together, but this is generally a bad idea


##### Accessing & Modifying Elements
1. Bracket notation: `arrayName[<index>]`
  1. array name: usually the variable name where the array is stored
  2. element index: the numeric index or a variable representing that number
2. assign a new value to an element with `=`

##### Array Methods
1. Syntax: `<arrayName>.<methodName>();`
2. Common methods:
  1. `length` - how many elements are in the array?
  2. `push` - add a new element to the end of the array
  3. `pop` - remove the last element
  4. `shift` - remove the first element
  5. `unshift` - add a new element to the front of the array
  6. `splice` - add/remove element(s) to/from any position
  7. `indexOf` - search for a value in an array

[More methods & details](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

[-top-](#top)


### Learning Journals
Throughout this course, students will be keeping an ongoing learning journal assignment as a separate GitHub repo. Walk through the process of creating the repo together and demonstrate how to organize their journal entries as individual markdown files.

Students will be submitting a learning journal assignment every other day in weeks 1-3. In week 1, these will occur on Tuesday and Thursday. In weeks 2 and 3, these will occur on Mondays, Wednesdays, and Fridays. Point out that there is a separate Canvas submission for these assignments, in addition to their daily code assignments.

Learning journals serve several purposes:
* Allow students to track their learning and mindset throughout the course
* Allow the instructional staff to address lingering issues or uncertainties
* Allow the instructional staff to identify students who are struggling

### Class 2 Lab: Make an ‘About Me’ Page with a Guessing Game
The goal for today is to get students thinking in terms of building projects made from separate HTML, JS, and CSS files, and about how to design/plan a code project and then implement the plan.

Introduce the general format of user stories: `As a ___ I want to ___ so that ___.` or some variation of this format. They will be writing their own user stories in future labs, so for now these are just examples.

Point out the technical requirements in the lab repo. Inform students that these requirements are used by the TAs when grading assignments and should be followed closely. Encourage students to read through all of the technical requirements prior to writing any code each day.

Quiz reminders:
* Quiz 1 will be published today.
* One-time set of instructions to give regarding quizzes. Go over the purpose of the quizzes and how we will be using them:
  * The quizzes are intended to reinforce student knowledge
  * The quizzes also help students prepare for taking the entrance exam for Code 301, which also serves as the final exam for this course
  * Students will always have more than 24 hours to complete a quiz
  * Students have unlimited attempts to retake the quizzes until they earn the score they desire, and it is okay to make additional quiz attempts after the due date
  * All quizzes are open-note, open-book, open-internet-seach
  * Avoid spending too much time reviewing the quizzes in lecture, as that can eat up a lot of time with questions and explanations. However, if a lot of students ask about a specific question, it is worthwhile to address that question as a class.

[-top-](#top)
