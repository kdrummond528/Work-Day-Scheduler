// show todays date in the header/jumbotron
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// function to get the current time
function currentTime() {
    // get the hours from current time
    var currentHour = moment().hour();

    // for loop for each of the hour color blocks if past present future
    $(".time-block").each(function () {
        var hourBlock = parseInt($(this).attr("id").split("hour")[1]);

        // if the hour row is less than the current hour make row gray for past
        if (hourBlock < currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }

    })

}

// save button event listener

// save user input to local storage when user clicks save button

// get from local storage 