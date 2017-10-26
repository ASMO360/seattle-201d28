<a id="top"></a>
# Class 12: Adding Charts to the Vote Tracker App

### Overview

Start with a code review session to assess the progress the class made on yesterday’s assignment. More discussion on organization and planning of a code project is often warranted, as students tend to struggle with writing code that does too much at once.

Many students will come into today's lecture and not have the first day of their lab completed. Reassure them that that is normal for this point in the course and today's lab assignment is lighter in order to give them time to catch up. Depending on the cohort, a longer code review may be needed.

The focus for today is to utilize a 3rd-party chart library so that students can provide a graphical representation of the click data that they are collecting from their vote tracker. This involves a discussion of the `<canvas>` element, which is where the chart library actually does its thing.

There are a lot of side topics tied into utilization of the chart library, many of which connect to real-world activities of web development:
* Read an article about a new technique or technology.
* Read/skim the documentation the documentation that comes with it.
* Being an autodidact with code.
* Building something with the new tool.
* Side discussion: minification and use of a CDN.

There’s a lot of opportunity to explore some high-level topics today if the cohort is ready. Or, it might need to be a day that is more direct and instructional. It all depends on the cohort.

One more thing we start doing at this time is looking at student projects from prior cohorts so that the students can start getting a feel for the scope of the projects in general. We like to discuss the successful ones as well as certain  aspects of them that needed more  UI/UX attention.

### Class 12 Lecture: Adding Charts to the Vote Tracker App
* Code Review
  * Depending on the cohort, a demo of a build-out may be more appropriate.
* Review of Readings
  * Students should get used to reading and deciphering documentation and those who have outstanding writing skills can consider developing a specialty in technical writing.  
  * Everything you need to know to use an API *cannot* be found in its docs.   
  * Documentation: [HTML `<canvas>` element docs](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage)
    * Provide a high-level overview of the `<canvas>` element
  * Article: [“Easily Create Stunning Animated Charts With Chart.js” by Sara Vieira](http://www.webdesignerdepot.com/2013/11/easily-create-stunning-animated-charts-with-chart-js/)
    * Articles like this are often a good way to get an introduction to something new because they are quick and easy to digest and provide a starting point for more advanced study.  
    * Writing articles like this is a good way to make yourself known and to establish a reputation.  
    * Point out that this article is older (2013) and the code samples are from an earlier version of the library
    * This may be a good time to discuss semantic software versioning
  * Documentation: [Chart.js docs](http://www.chartjs.org/docs/latest/)
    * Explain the difference between downloading the latest version vs. using a CDN


[-top-](#top)

### Lab 12: Add a Chart To Your Vote Tracker

Because of the large building from yesterday's lab, today is meant to be a catch-up day. The only lab requirement is to take the data from the list and render it as a chart using the Chart.js library.

Remind students that they need to have full functionality before moving on to the chart implementation. If they are not tracking clicks and votes yet, it is not a good use of time to attempt the chart yet.

[-top-](#top)
