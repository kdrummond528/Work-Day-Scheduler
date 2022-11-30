// show todays date in the header/jumbotron
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// function to get the current time
function currentTime() {
    // get the hours from current time
    var currentHour = moment().hour();

    // for loop for each of the hour color blocks if past present future
    $(".time-block").each(function () {
        var hourBlock

    })

}

// save button event listener

// save user input to local storage when user clicks save button

// get from local storage 