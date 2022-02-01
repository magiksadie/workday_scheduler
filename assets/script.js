$(document).ready(function() {
    //Current Date and Time in header using moment.js
    let now = moment().format('MMMM Do YYYY, h a');
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = now;
    //Set currentHour
    let currentHour = parseInt(moment().format('HH'));
  
    function setHours() {
        //Compare timeblock to current time & change color
        $('.row').each(function() {
          var timeRow = parseInt($(this).attr("id").split("-")[1]);
          if (currentHour > timeRow) {
            $(this).addClass('past');
          } else if (currentHour === timeRow) {
              $(this).removeClass('past');
              $(this).addClass('present');
          } else if (currentHour < timeRow) {
              $(this).removeClass('present');
              $(this).addClass('future');
          }
        });
      }
  
    setHours();
  });

//Save data to local storage
 $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time,value);
});

//Retrieve data from local storage 
    $("hour-09 .time-block").val(localStorage.getItem("09"));
    $("hour-10 .time-block").val(localStorage.getItem("10"));
    $("hour-11 .time-block").val(localStorage.getItem("11"));
    $("hour-12 .time-block").val(localStorage.getItem("12"));
    $("hour-13 .time-block").val(localStorage.getItem("13"));
    $("hour-14 .time-block").val(localStorage.getItem("14"));
    $("hour-15 .time-block").val(localStorage.getItem("15"));
    $("hour-16 .time-block").val(localStorage.getItem("16"));
    $("hour-17 .time-block").val(localStorage.getItem("17")); 
