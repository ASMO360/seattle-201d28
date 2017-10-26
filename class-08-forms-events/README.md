<a id="top"></a>
# Class 8: HTML Forms and JS Events

### Overview

This is the second of the two toughest days in the course. HTML forms themselves have a lot of parts that need to be managed, and then there is the JavaScript events side to handle the form submission. Again, it is a lot of brand new material, with greater complexity, all hitting at once.

If possible, depending upon the makeup and progress of the class, this makes a good pair programming assignment. The key is to choose complementary pairings of stronger and weaker students, while avoiding extreme disparities. Otherwise pair programming at this stage becomes an exercise in futile frustration.

### Class 8 Lecture: HTML Forms and JS Events
* Code Review
  * Gauge the class's experiences from yesterday when planning code review. Maybe it's most beneficial to look at working code, maybe look at broken code, maybe do a little bit of both.
  * Some common points to reiterate include contextual `this`, naming conventions, organization of code, and general patterns.
* HTML/CSS book, Ch. 7, “Forms”
	* p.148: Form controls
	* pp.149-50: How forms work
	* pp.151-62 : Form structure, overview of all input types
	* p.163: Labelling form controls
	* p.164: `<fieldset>` and grouping form elements
	* pp.165-68 : HTML5 form features (validation, dates, email, URL search)
* HTML/CSS book, Ch. 14, “Lists, Tables & Forms”
	* p.333-36: Bullet point styles/positioning for lists
	* p.337-40: Table properties (VERY useful reference)
	* .341-44: Styling [forms, inputs, buttons, fieldsets, legends]
	* p.345: Aligning form controls
* JavaScript book, Ch. 6, “Events”
	* pp.246-47: Different event types (big list!)
	* p.248: How events trigger JavaScript code
	* pp.250-53: Three ways to bind an event to an element
	* p.254: Event listeners
	* p.260: Event flow
	* p.264: Using event listeners with the event object
	* p.268: Using event delegation
	* p.270: Which element did an event occur on?
	* p.271: Different types of events
	* p.272: User interface events
	* p.280: Keyboard events
	* p.282: Form events
* Code Demo
  * Begin with a basic demonstration of event listeners, such as making a `div` with a click event listener in CodePen. Then move on to a demonstration of HTML forms and adding event listeners to the submit button.

[-top-](#top)

### Class 8 Lab: Add a Form to the Cookie Stand Project

This is the third heavy day in a row. One of the less intuitive pieces is that the input fields will convert numbers to string, so a reminder about using `parseInt` is helpful.

Expect students to have difficulty calling their functions in the correct order, or forgetting to push their data in to an array. It is also common to run into typos or confusion with naming.

Plan for an extensive code review tomorrow to bring all of the pieces together.


[-top-](#top)
