// show todays date in the header/jumbotron
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// function to get the current time
function currentTime() {
    // get the hours from current time
    var currentHour = moment().hour();


}
