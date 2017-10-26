<a id="top"></a>

# Class 4: HTML Links, JS Functions, and Intro to CSS Layout

### Overview
This is a very dense class day, and continues the trajectory of ramping up the amount and complexity of the content as we progress through the week. By this time the instructional staff should have a solid feel for the students who are starting to get overwhelmed and who might be at risk of not completing the course. It is important to make an opportunity to spend time with these students of concern, to help them along and also more closely assess where they are.

Each of the two big topics brings challenges. With functions, students tend to want to make them much more complicated than they are, instead of simply being a wrapper around logic that they have already demonstrated the ability to manage. Plus, there is typically a lot of confusion with fundamentals of how parameters and arguments work, the difference between declaring and calling a function, and the use of ‘return’ statements. Experience shows that probably 50% or more of students actually know very little of how functions work… and that is before bringing the concept of ‘scope’ into the discussion. In addition, most students have seen and tend to haphazardly use function declarations and function expressions, and care needs to be taken to guide them (for now) down the declaration path, without getting sucked into the rabbit holes of hoisting and JS interpreter behavior if the students generally are struggling with the basics.

With CSS layout, there is an enormous range of possibilities that is impossible to manage without command of a handful of fundamental concepts; yet, it takes more work than expected to get the basic concepts across effectively. Students are used to thinking of formatting in word processing documents, and the ease of just highlighting and clicking options until the desired look is achieved. With the interaction of CSS and HTML, care must be given to planning and organization of a document within the constraints of the fundamental CSS layout concepts. This points to the need to have a plan in place before building, since structure and detail are so interlinked. Command of terminology is key, and this is another important place to stress the role of solid communication skills.

On top of all of this, today is their first experience in pair programming, so there are numerous technical and social/communication aspects to consider. Do not underestimate the time needed to demonstrate Git flow to the class. Expect a long lab day, and stress the importance of time management.

It can be helpful to expose students to [learnlayout.com](http://learnlayout.com) as an introduction to CSS layouts.

[This article from freecodecamp.org](https://medium.freecodecamp.org/css-floats-explained-by-riding-an-escalator-57fa55232333) is also a great resource for students to understand how floats work in CSS.

[-top-](#top)

### Class 4 Lecture: HTML Links, JS Functions, and Intro to CSS Layout
* Code Review
	* It was intentional to avoid discussing `typeof` and `parseInt` yesterday. Hopefully students realized that `prompt` returns a string, even if the user inputs a number, and were guided to the solution by Googling the answer or reaching out to a member of the instructional staff
	* Depending on the level of understanding (and frustration) during lab 3, it may be helpful to walk through an example approach to solving one or both of the questions from their lab assignment.
* HTML/CSS book, Ch. 4, “Links”
  * p.77: Writing links (<a> tag structure)
  * p.79: Linking to other sites
  * p.80: Linking to other pages on the same site
  * p.81-82: Directory structure
		* Create a JS file in a separate folder and demonstrate how to modify the filepath in the `<script>` tag
  * p.83: Relative URLs
  * p.85: Email links
  * p.86: Opening links in a new window
  * p.87: Linking to a specific part of the same page
* HTML/CSS book, Ch. 15, “Layout”
  * p.361: Key concepts in positioning (block/inline)
  * p.363-76: Controlling the position of elements (normal (default), relative, absolute, fixed, floating)
		* Discourage students from going overboard with manipulating position or resorting to CSS "hacks"
		* Explain the difference between the way text floats around block elements vs. inline elements
  * p.377-8: Screen sizes and resolutions
		* Encourage students to consider mobile view when thinking about layout
  * p.379: Page sizes
  * p.381-6: Fixed & liquid layouts
  * p.387: Layout grids
  * p.391: CSS frameworks
* JavaScript book, Ch. 3 (pp.86-99 only), “Functions, Methods & Objects”
  * p.88: What is a function?
		* Encourage students to keep their functions simple to start out
  * p.90: Declaring a function
  * p.91: Calling a function
  * p.92: Declaring functions that need information (parameters)
  * p.93: Calling functions that need information (arguments)
		* Call the same function several times with various parameters to illustrate the versatility of functions
		* Demonstrate the result of calling a function that is missing an argument
  * p.94: Getting a single value out of a function
  * p.95: Getting multiple values out of a function
  * p.96: Anonymous functions & function expressions
  * p.97: IIFEs
		* Mention this topic briefly and mention that IIFEs are used frequently in 301
  * p.98: Variable scope
* Live Code Demo
	* Use this time to introduce functions at a high level, saving a deeper explanation for tomorrow
	* Clarify the difference between a function declaration and a function call/invocation
	* Clarify the difference between a function that has no parameters and a function that does take parameters, and demonstrate the result of calling a function without passing in the necessary arguments

[-top-](#top)

### Class 4 Lab: Pair Programming and More Extensions to About Me

Here's the basics of what you need to know about *pair programming*. This is a methodology for work in software development that is increasingly more popular and widespread (not only in development work, but also in interview processes), and we place a high value on training our students to pair program effectively. There are more details in the lab assignment.

The process of forking and cloning a repository is brand new to most 201 students, so the explanation should not be rushed. Students should come out of the lab setup with an understanding of the terminal commands and GitHub procedures needed to make certain that there is consistency between the code base in all four locations: their GitHub account, their personal computer, their partner's GitHub account, and their partner's personal computer. The concepts of forking, pulling, and creating pull requests will likely be brand new. If possible, walk through a demonstration along with another member of the instructional staff, such as a TA. Encourage students to ask for a reminder during lab time if they forget any of the steps.

* In pair programming there are two developers working on a single body of code on a single computer.
* One member of the pair is the Driver, and this person will be the one doing all of the actual typing work on the laptop. The Driver will be working on the Navigator's code by way of forking and cloning the Navigator's repository.
* The other member of the pair is the Navigator, and this person will work with only their voice and their thoughts.
* The Navigator does not touch the keyboard, nor does the Navigator work on their laptop "on the side". The Navigator is fully engaged with the work that the pair is doing, typically using a piece of scratch paper to sketch diagrams, take notes, or list ideas. At most the Navigator uses their laptop to perhaps keep a copy of this assignment document open or to look up something needed to write the code, such as a reference page like MDN.
* Under no circumstances does the Navigator work on any code on their laptop: for the pair programming process to be effective, both parties must be fully engaged on the code they're working on together.
* The lab time should be divided into two sections of approximately two hours each. At the halfway mark, students should swap roles and work on the other person's code. Remind students to watch the clock and determine the best point to swap roles.
* In the case of an odd number of students, one group will have three members and they should rotate through three roles: Driver, Navigator, Observer. Each student should take on each role one time. They will need to be even more mindful about watching the clock to ensure that equal time is devoted to all three projects. Take note of the students in this group and ensure that they are not in a group of three in weeks 2 and 3.

[-top-](#top)
