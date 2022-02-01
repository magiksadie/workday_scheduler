$(document).ready(function() {
    //Current Date and Time in header using moment.js
    let now = moment().format('MMMM Do YYYY, h a');
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = now;
    //Set currentHour
    let currentHour = moment().format('HH');
    console.log(moment().format('HH'));
  
    function setHours() {
      //Compare timeblock to current time & change color
      $('.row').each(function() {
        var timeRow = $(this).attr("id").split("-")[1];
          //document.getElementsByClassName('.past', '.present', '.future');
      //Timeblock == Current time
          if (currentHour == timeRow) {
              $(this).addClass('present');
              //Timeblock > Current Time
          } else if (currentHour < timeRow) {
              $(this).removeClass('present');
              $(this).addClass('future'); 
              //Timeblock < Current Time
          } else if (currentHour > timeRow) {
              $(this).removeClass('future');
              $(this).addClass('past');
          }
      });
    }
  
    setHours();
  });

