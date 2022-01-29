//Current Date and Time in header using moment.js
let now = moment().format('MMMM Do YYYY, h:mm:ss a');
let displayDate = document.getElementById("currentDay");
displayDate.innerHTML = now;

