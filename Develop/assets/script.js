//Current Date and Time in header
let now = moment().format('MMMM Do YYYY, h:mm:ss a');
let displayDate =  document.getElementById("currentDay");
displayDate.innerHTML = now;
