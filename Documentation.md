Step 1: Analytical Thinking
    ✔Which modules should you create?
        ✔index.html
        ✔styles: main.css, details.css
        ✔scripts: database.js, bands.js, venues.js, bookings.js, main.js
    What is the responsibility of each module?
        ✔database.js 
            ✔to store the data (or state) for the application 
            ✔to export the functions that allow other modules to get copies of the state
                ✔getBands
                ✔getVenues
                ✔getBookings
        bands.js 
            ✔to import and reassign the list of bands 
            to store the function to create the html list of bands
            to store the event listener
                click on the band, it shows the venues where the band is playing
            ???
        venues.js 
            ✔to import and reassign the list of venues 
            ???
        bookings.js 
            ✔to import the list of bookings in a string
            ???
        main.js 
            to bring it all together
            ???
        index.html
            to create the web page
            ???
        main.css  
            to make it pretty 
            ???
    What functions should be in which modules?
        database.js
            ✔export functions to allow other modules to get copies of the state (or data) 
                ✔getVenues
                    returns the array of objects for venues
                ✔getBands
                    returns the array of objects for bands
                ✔getBookings
                    returns the array of objects for bookings
        bands.js 
            function for the bulleted list of bands, click event that shows all of the venues where the band is playing
                ✔import getBands and reassign
                ✔export Bands adn return html to get bulleted list of bands
        venue.js 
            function for the bulleted list of venues, click event that shows all of the banks booked at that venue
                ✔import getVenues and reassign
                ✔export Venues and return html to get the bulleted list of venues
        bookings.js 
            function for the list of all the bookings
                ✔import getBands, getVenues, and getBookings and reassign
            BAND is playing at VENUE on DATE, click event that shows all of the band information for that booking            
        main.js 
            html function to publish information to the webpage and mainContainer = document.querySelector("fill in appropriate element/class/id")
    What is the responsibility of each function?
        As above
    What should each function return?
        As above
Step 2: Algorithmic Thinking
    In which order should you invoke your functions?
    What data do you need to get from your database when an event listener is triggered?
    In what order should the data be navigated with for..of loops?
    What is the spcific algorithm for each function? Does the function need parameters? Should it return something?