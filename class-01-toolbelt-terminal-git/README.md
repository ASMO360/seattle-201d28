<a id="top"></a>

# Class 1: Introduction to the Tools and Fundamentals of Development

### Overview
This day is all about getting everyone off to a good start with the numerous new tools that they will be using in the coming weeks. For many students this is the first time to work in a code editor and the first time to use the command line for file manipulation. These tools are foreign to most students, and students often bring extra anxiety into the first day. It’s an important life marker to have that “first day of school” moment with students by addressing their concerns and anxieties with reassurance. It can be especially helpful during this first week to acknowledge these feelings and assure students that it is normal to feel like the concepts are not clicking right away, but will with time. It can also help throughout this first week to ask TAs to share their 201 experiences and what they have learned from those experiences.

One detail to note: In the lab for Class 1, we help the students set up their JS linter in Atom and also set a custom .bash_profile that will ultimately show their Git status once we start working with Git. Doing this serves two purposes: 1) Gives us another means of verifying their computer setups; 2) Creates a point of 1-on-1 interaction with the students so we can get to know them better. Work on learning names as you deal with individual students.

### Campus Kickoff

There is a slide deck used by the Campus Director during kickoff. At the very least, the instructor should look over these slides to get a sense of what is covered and to be ready for any questions.

Topics Covered by Campus Director:
* Vision and Mission
* Introductions (including student introductions)
* Campus
* Resources
* Policies and Practices
* Our Goals
* How To Learn
* How To Succeed

Be ready to take notes during the Campus Director’s kickoff presentation. Some things are already in the instructor kickoff slides, but there are always other things that come to mind. Watch the students and work on remembering their names, too.

### Reminder of bathroom codes
* Men's: 5218*  
* Women's: 5208*  

### Instructor and TA Kickoff
Let students know that today will be a long day considering we have a lot to cover on top of the Kick-Off we just completed, but this will not be the normal daily schedule.

It is useful for the instructor to do their own kickoff presentation to share detailed thoughts on learning, provide an overview of course content, and explain how Code 201 fits into the Code Fellows curriculum. The lecture slides include mindmaps for Code 201 and Code 301 and provide a great opportunity to engage students and get a feel for what they are most curious about. Focus on building an inquisitive and interactive rapport with students.

If you haven't already, give a quick intro on your background. Introduce yourself, and ask your TAs and other instructional staff to introduce themselves as well.

Inform students that the TA's will be helping with grading and student questions during lab.

Let students know that you always try to be available, but to please be understanding of evenings and weekends. We will try and respond as quickly as possible, but there may be times where those questions and concerns will have to wait for class/lab. Everyone needs breaks, even the instructional staff.

If you haven't already, go around and do quick student intros:  
* Name  
* What brought you to Code Fellows  
* What you were doing before Code Fellows
* Interesting/geeky/quirky fact about yourself  

### Academic Overview
Go over academic overview slides, located in this class-01 directory.

Topics Covered by Instructor in the Academic Overview:
* Curriculum
* Grading
  * Resubmission for full credit
  * Late penalties
* Canvas
* Quizzes & 301 Entrance Exam
* Advice from Instructors
* Review of the Prework

[-top-](#top)

### Verify Student Toolbelts and Ongoing Laptop Setup
> NOTE: Instructor should switch shell to `bash` before screen casting and setup your `bash_profile` and `bash_rc` the same as students will.

> NOTE: By doing a few quick tests and exercises, as detailed below, ensure that students have functionality of all of the core pieces of their development environment:


The goal of this hour of class is to ensure that students all have properly functioning laptop setups and to unearth any lingering problems. In addition, there will be some additional functionality and tools provided for students: Atom package installations, command-line customization, and linter setup.

Every problem that comes up in this part of the class should be dealt with right away. Utilize all instructional staff to float around the room to assist as needed.

Use this time to get a feel for the distribution of operating systems in the class, and in particular make note of any Windows and Linux users. Ideally, there is a member of the instructional staff who has experience in those setups. In the past, we’ve had success by assigning all of the Windows/Linux users to a single TA.

Tasks to walk students through (these should be done on the instructor’s laptop and shown to the students on the classroom projector):
* Set Atom as their default editor with `git config --global core.editor atom` to prevent detours into Vim on merge conflicts, etc.
* Students need to be guided through creating a .eslintrc.json, storing it in their home directory (~/, in other words), and then configuring the Atom package “linter-eslint” to use it via the “.eslintrc.json Path” setting
  * Have students enter `cd` on the command line to navigate to their Home directory
  * Students then should then enter `atom .eslintrc.json` to create a file to store the linter rules. If this command does not work, then the students have a problem with their Atom setup that needs to be addressed, most likely a `failure to “Install Shell Commands”` from the Atom menu.
  * Open `.eslintrc.json`:  
    * Path:  `~/Dropbox/Developer/CodeFellows/201/preparations/DailyLectureGuide/class-1/.eslintrc.json`  
    * Copy/paste the content of that file into the class Slack channel (this also verifies the students’ Slack setups) using the three backticks before/after (```code```) to set the content aside as a code block. Use this opportunity to show students the code highlighting options of Slack if you have not already
    * Be sure to point out that this is probably the ONLY time that it is OK to just copy/paste code!
  * Have the students copy/paste that code into the `.eslintrc.json` file that they created, and be sure to tell them to save the file
  * Students will need to restart Atom for the changes to take effect
  * Once they do, guide them through entering `atom lint-test.js` at the command line and then paste the contents of the JS sample that you send to them through Slack
* Set up a customized command-line prompt (only if there is time remaining; this task can be moved to a different day but needs to happen soon). This is not essential for today, but by the time students are working in Git in the lab for Class 2, they will want/need to see their repo status on their shell prompt. The best solution for this is to show them how to use http://ezprompt.net (a site that facilitates building a custom prompt that includes Git status, current filepath, colors, etc.)
  * Have students `cd` to their home directory from the command line
  * Enter `atom .bashrc` and paste the code from the `.bashrc` from Slack
  * Save `.bashrc` and restart bash or terminal

Atom: type `atom` in the command line to verify that it opens properly. Command line tools may need to be installed.

Atom packages: Be sure that they have linter, minimap, and open-in-browser installed:  
* `apm install linter-eslint`  
* `apm install minimap`  
* `apm install open-in-browser`  

Chrome: how to open the console - `cmd+option+j`  

Git: enter `which git` in the command line to verify installation  

Directory structure: Have students set up a directory at `~/codefellows/201/` in which they will store their classwork. Go over directory structure in general; compare to GUI.

[-top-](#top)

### Class 1 Lecture: Introduction to the Tools and Fundamentals of Development
Remind students that by this point they should have ALL completed the prework assignments.

The slides can be found in the [lectures folder of the 201 guide.](https://github.com/codefellows/code-201-guide/tree/master/lectures/class-01-toolbelt-terminal-git/slides)  
* 3-unix.pdf  
* 4-git-intro.pdf  
* 5-git-branching.pdf

#### Important slide topics:  
Unix Commands:  
* `pwd`  
* Filepaths and up/down navigation concepts  
* `tree`  
* `ls`, `ls -la`  
* `cd`, `mkdir`  
* `touch`, `atom`  
* `mv`, `rm`, `cp`  
* `history`  
* `man`  
  * demonstrate how to exit with `ctrl + c` or `command + c`

Git Intro:  
* What is Git?  
* Version control concepts, show an example of a 201 final project repo and, at a high level, point out commits, branches, network graph
  * Point out the benefits of keeping their code organized
* Analogy of saving multiple versions of a term paper vs. overwriting changes with each save
* Series of snapshots  
* HEAD  

> NOTE: Save the discussion of GitHub for day 2 if short on time

GitHub:  
* Remotes  
* Creating a repository  
* Git clone  
* “ACP” (add, commit, push)  
  * Note: do not discuss branches yet; for now, students will be working only on master

[-top-](#top)

#### Review of Reading Assignments  

Be prepared to review the readings by having the textbook PDFs open each day.

Provide tips for students, such as focusing on the pages with a dark background and skimming other sections that are not as vital for understanding. The intention is for students to have exposure to the material prior to class without feeling like they need to memorize every piece of information.

Go over the readings for today (important points broken out below). Use your discretion regarding the amount of time devoted to explaining each topic.

#### Important points for each chapter  
* HTML/CSS book, Ch. 1, “Structure”  
  * p.15: How pages use structure  
    * When reading a newspaper, structure helps readers understand the stories.  
    * Using Headers, Footers, Titles, etc, to give the reader visual queues about what they are reading.  
  * p.20: HTML describes the structure of pages  
    * Using tags, HTML gives structure to a web page.  
  * pp.21-22: Tags as containers (great graphic page)  
    * HTML uses elements to describe tHe structure of pages.  
  * p.24: Tags  
    * Opening and closing tags.  
  * p.26: Attributes  
    * Attributes help to describe difference aspects of its corresponding tag.  
  * p.33: Code in a CMS  
    * Code in a CMS(Content Management System), like blogging platforms, Wordpress, etc, consist of template code describing the layout of the content they display.  
* HTML/CSS book, Ch. 8, “Extra Markup”  
  * p.179: Evolution of HTML  
    * HTML 4(1997): With the exception of a few elements added in HTML5 (which have been highlighted), the elements you have seen in this book were all available in HTML 4.  
    * XHTML(2000): HTML that follows the rules of XML. For example closing tags, attributes in lowercase, scope of opening and closing tags.  
    * HTML 5(2000): In HTML5, web page authors do not need to close all tags, and new elements and attributes were introduced. We will be utilizing HTML5.  
  * p.181: Doctypes  
    * Specify which html version you will be using.  
  * p.182: Comments  
    * Using comments in your code is good practice across all languages.  
    * Comments can help provide clarity to code you write.  
  * p.183: `class` & `id` attributes  
    * Every HTML element can carry the `id` attribute. It is used to uniquely identify that element from other elements on the page.  
      * Its value should start with a letter or an underscore.  
    * Sometimes, rather than uniquely identifying one element within a document, you will want a way to identify several elements as being different from the other elements on the page.  
    * This is where we use the `class` attribute. It allows us to classify groups of objects as other objects.  
  * p.185: Block vs. inline  
    * Block Elements:  
      * Examples:  
        * `<h1>` - header tag
        * `<p>` - paragraph tag  
        * `<ul>` - bullet lists  
        * `<li>` - list items  
    * Inline elements:  
      * Examples:  
        * `<a>`  
        * `<b>`  
        * `<em>`  
        * `<img>`  
        * `<button>`
        * `<input>`
  * p.191: Meta tags  
    * The `<meta>` element lives inside the `<head>` element and contains information about that web page.  
    * Most common attributes:  
      * description - This contains a description of the page. This description is commonly used by search engines to understand what the page is about and should be a maximum of 155 characters. Sometimes it is also displayed in search engine results.  
      * keywords - This contains a list of comma- separated words that a user might search on to find the page. In practice, this no longer has any noticeable effect on how search engines index your site.  
      * robots - This indicates whether search engines should add this page to their search results or not. A value of noindex can be used if this page should not be added. A value of nofollow can be used if search engines should add this page in their results but not any pages that it links to.  
  * p.193: Escape characters  
    * Great reference when special characters are needed in your code. For example, if you need to display a quotation mark you use an escape character to describe the special character.  
  * p.194: Special characters  
    * Represented by special escape characters.  
* HTML/CSS book, Ch. 17, “HTML5 Layout”  
  * Semantic HTML  
    * As an example, recent HTML standards discourage use of the tag `<i>`(italic) in preference of more accurate tags such as `<em>`(emphasis)  
    * The CSS stylesheet should then specify whether emphasis is denoted by an italic font, a bold font, underlining, slower or louder audible speech etc.  
  * Traditional layout vs. HTML5  
    * For a long time, web page authors used `<div>` elements to group together related elements on the page (such as the elements that form a header, an article, footer or sidebar). Authors used `class` or `id` attributes to indicate the role of the `<div>` element in the structure of the page.  
    * HTML5 introduces a new set of elements that allow you to divide up the parts of a page. The names of these elements indicate the kind of content you will find in them. They are still subject to change, but that has not stopped many web page authors using them already.  
    * Example: `<div id="header">`  is now `<header>`.  
    * The point of creating these new elements is so that web page authors can use them to help describe the structure of the page. For example, screen reader software might allow users to ignore headers and footers and get straight to the content.  
    * Similarly, search engines might place more weight on the content in an `<article>` element than that in the `<header>` or `<footer>` elements. I think you will agree that it also makes the code easier to follow.  
  * Header, footer, nav, aside, section, figure, div  
    * Read about these tags throughout CH.17 and get a good general understanding of their functionality  
* HTML/CSS book, Ch. 18, “Process & Design”  
  * Things to think about when starting a project  
    * Who is the site for?  
    * User stories  
    * Sitemaps  
      * Now that you know what needs to appear on your site, you can start to organize the information into sections or pages.  
      * Sitemaps give us a good visualization and reference guide of how we want to display content to the user.  
    * Wireframes  
      * A wireframe is a simple sketch of the key information that needs to go on each page of a site. It shows the hierarchy of the information and how much space it might require.  
    * Visual hierarchy, grouping, navigation  
      * visual hierarchy refers to the order in which your eyes perceive what they see.  
      * When making sense of a design, we tend to organize visual elements into groups. Grouping related pieces of information together can make a design easier to comprehend. Here are some ways this can be achieved.  
      * read further into these topics throughout CH.18  
* JavaScript book, Ch. 1, “The ABC of Programming” (note that these are all basic concepts, so again, aim for the big picture)  
  * p.16 	Designing a script  
  * p.28 	Objects & properties  
  * p.30 	Events  
  * p.36 	Browsers & document object  
  * p.40 	How a browser sees a web page  
  * p.44 	How HTML, CSS, JS work together  
  * p.45 	Progressive enhancement  
  * p.51 	JavaScript runs where it is found in the HTML  

[-top-](#top)

<a id="code"></a>
### Live code Demo

A collection of prior code demos is available in this guide. Feel free to use the demos or create your own variation.

The code demo should be written completely from scratch in front of the class, with the students encouraged to code along on their own laptops if they are able to. After lecture, push your code demo to the class repo and inform students that these demos will be available for their reference each day. This will relieve any pressure that students may feel to follow along with the code demo during class.

Do not be deceived by the simplicity of this demo: there is A LOT of stuff to go over with the students that will take a lot of time to cover. This is their first real dive into writing code with their new tools.

This code demo is to help students be ready to complete the first assignment and also to show off some functionality of the REPL and Chrome Developer Tools. This demo should also reveal any lingering issues with student computer setups.

If you are running short on time, skip the if/else conditional and cover it in lecture 2.

[-top-](#top)

### Lab Setup

To finish the day, go over the lab assignment and show students how to find/read the assignment, complete the assignment as a code demo, and submit the assignment (which for today, is submitted in a GitHub Gist to introduce the students to that tool).

Furthermore, use this code session to explain the meaning of REPL and show students how to play around a little with JS in the console by declaring/assigning variables, doing some arithmetic, evaluating a simple expression like “3 < 2”, and so on.

Pull up the class repo and show students that the lab folder has been added to the repo for the day. Avoid publishing the lab ahead of time as some students may try to work ahead.

### Class 1 Lab: Getting Up and Running!
The goal for today is to get the students comfortable working with the entire toolchain.

The lab assignments are available in the public folder of this repository.

Demonstrate how to open projects in the editor from the command line. For example, `code .` or `atom .`. Also demonstrate how to touch and open a file in a single command. For example, `code index.html` or `atom index.html`.

[-top-](#top)
