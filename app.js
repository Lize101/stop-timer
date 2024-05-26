// Button variables

const playBtn = document.querySelector('#playbtn');
const resetBtn = document.querySelector('#resetbtn');

// Variables to hold time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Stopwatch function that increments the seconds, minutes and hours and displays the time in the UI

function stopWatch () {

    // Increment the seconds when play button is pressed

    seconds++

    // Increment minutes and hours when timer gets to 60 seconds or 60 minutes

    if (seconds / 60 === 1) { // When the timer reaches 60 seconds, the seconds will restart to '0' and minutes increase
        seconds = 0; // Seconds restart to '0'
        minutes++; // Minutes increase by 1

        if (minutes / 60 === 1) { // When timer reaches 60 minutes, the hours start increasing by 1 and minutes reset to '0'
            minutes = 0;
            hours++;
        }
    }

    // Variable to display the stopWatch functionality in the UI - make the stop watch dynamic rather than static

    let showTimer = document.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + seconds;
}

// Display the stopWatch functionality using the window object and setInterval function

window.setInterval(stopWatch, 1000); //setInterval is a method that calls a function at a specified time. It takes two parameters - the function and time