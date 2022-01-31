//Current Date and Time in header using moment.js
let now = moment().format('MMMM Do YYYY, h a');
let displayDate = document.getElementById("currentDay");
displayDate.innerHTML = now;
//Set currentHour
let currentHour = moment().format('HH');
console.log(moment().format('HH'));

//Not functioning ):
//Compare timeblock to current time & change color
$('.hour').each(function() {
    var timeRow = $(this).parent().attr("id").split("-")[1];
    document.getElementsByClassName('past', 'present', 'future');
//Timeblock == Current time
    if (currentHour == timeRow) {
        $(this).children(".description").addClass("present");
        $(this).addClass('present');
        //Timeblock > Current Time
    } else if (currentHour < timeRow) {
        $(this).removeClass("present");
        $(this).addClass("future"); 
        //Timeblock < Current Time
    } else if (currentHour > timeRow) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});


//Save data to local storage
 $(".saveBtn").on('click', function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time,value);
});

//Retrieve data from local storage 
$("hour0900 .time-block").val(localStorage.getItem("09"));
$("hour1000 .time-block").val(localStorage.getItem("10"));
$("hour1100 .time-block").val(localStorage.getItem("11"));
$("hour1200 .time-block").val(localStorage.getItem("12"));
$("hour1300 .time-block").val(localStorage.getItem("13"));
$("hour1400 .time-block").val(localStorage.getItem("14"));
$("hour1500 .time-block").val(localStorage.getItem("15"));
$("hour1600 .time-block").val(localStorage.getItem("16"));
$("hour1700 .time-block").val(localStorage.getItem("17"));

