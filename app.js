// Button variables

const playBtn = document.querySelector('#playbtn');
const resetBtn = document.querySelector('#resetbtn');

// Variables to hold time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables to add extra zeros to timer

let frontSeconds = 0;
let frontMinutes = 0;
let frontHours = 0;

// Variables for interval and timer status

let timerStatus = 'stopped'; // Stopped is a temporary value
let timerInterval = 'null'; // Null is a temporary value

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

    // Function to incorporate zeros at the front of seconds, minutes and hours if stop watch is only showing one digit - if number is less than 10 (single digits)

    if (seconds < 10) {
        frontSeconds = '0' + seconds.toString();
    } else {
        frontSeconds = seconds;
    }

    if (minutes < 10) {
        frontMinutes = '0' + minutes.toString();
    } else {
        frontMinutes = minutes;
    }

    if (hours < 10) {
        frontHours = '0' + hours.toString();
    } else {
        frontHours = hours;
    }

    // Variable to display the stopWatch functionality in the UI - make the stop watch dynamic rather than static

    let showTimer = document.getElementById('timer').innerHTML = frontHours + ':' + frontMinutes + ':' + frontSeconds;
}

playBtn.addEventListener('click', function() {
    if (timerStatus === 'stopped') {
        timerInterval = window.setInterval(stopWatch, 1000); //setInterval is a method that calls a function at a specified time. It takes two parameters - the function and time
        playBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i> `; // Change icon from play button to pause button
        timerStatus = 'playing';
    } else {
    window.clearInterval(timerInterval); //clearInterval function stops whatever is in the setInternal function - in this case it stops the timer
    playBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`; // Change icon from pause button to play button
    timerStatus = 'stopped';
    }
} )

// window.setInterval(stopWatch, 1000); - Display the stopWatch functionality using the window object (when the browser loads) and setInterval function

