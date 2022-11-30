// show todays date in the header/jumbotron
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);

// function to get the current time
function currentTime() {
    // get the hours from current time
    var currentHour = moment().hour();

    // for loop for each of the hour color blocks if past present future
    $(".time-block").each(function () {
        var hourBlock = parseInt($(this).attr("id")[1]);

        // if the hour row is less than the current hour make row gray for past
        if (hourBlock < currentHour) {
            $(this).addClass("past");
            // $(this).removeClass("present");
            // $(this).removeClass("future");
        }
        // if the hour row is equal to the current hour make row red for present
        else if (hourBlock === currentHour) {
            // $(this).removeClass("past");
            $(this).addClass("present");
            // $(this).removeClass("future");
        }
        // if the hour row is greater than the current hour make row green for future
        else {
            // $(this).removeClass("past");
            // $(this).removeClass("present");
            $(this).addClass("future");
        }
    })

}

// save button event listener

// save user input to local storage when user clicks save button

// get from local storage 

currentTime();