# JavaScript-and-DOM-Manipulation-Project

This program was written by Radha Mahalingam on 5-20-19


In this project, I am trying to help the general public by putting all of the eye-witness reports online.  This report provide the extra-terrestrial activity on the earth based on the UFO sightings documented.

This program uses the HTML, CSS, Bootstrap and Javascript to accomplish this.  I made a few modifications to the starter HTML code given in the exercise and used it to render the information.

Also, used the UFO dataset provided (data.js), which has the information in the form of an array of JavaScript objects.

I wrote the code in Javascript that appends the table to my web page (index.html) and then adds new rows of data for each UFO sightings.  The table has columns like `date/time`, `city`, `state`, `country`, `shape`, and `comment` and you will see this information, when the app.js renders the page.

I have created a search function on 'date/time' in Javascript that will listen for event and search through the 'date/time' column to find and render the rows that match user input.

The click event for the search is achieved through a 'Filter Table' button in HTML page and corresponding event listener and Javascript function.

In addition to this, I have also created a 'Clear Filter' button in HTML and corresponding event in Javascript, which invokes a function to clear the filter and displays the full information, when user wants to see the full information.

