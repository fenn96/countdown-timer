const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYears = '1 Jan 2023';

// Function to count down to New Years Day
function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    //The total seconds until New Years is the New Years Date minus the Current Date(given in milliseconds) divided by 1000 to get seconds
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor((totalSeconds / 3600) / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = (Math.floor(totalSeconds / 60) % 24) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

// Put 0 in front of number if number is less than 10
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

// Initial Call
countdown();

// Update every 1000 milliseconds(in other words, every second)
setInterval(countdown, 1000);