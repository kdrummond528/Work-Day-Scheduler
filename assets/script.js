// show todays date in the header/jumbotron
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);

// function to get the current time
function currentTime() {
    // get the hours from current time
    var currentHour = moment().hour();

    // for loop for each of the hour color blocks if past present future
    $(".time-block").each(function () {
        var hourBlock = parseInt($(this).attr("id").split("hr")[1]);

        // if the hour row is less than the current hour make row gray for past
        if (hourBlock < currentHour) {
            $(this).addClass("past");
        }
        // if the hour row is equal to the current hour make row red for present
        else if (hourBlock === currentHour) {
            $(this).addClass("present");
        }
        // if the hour row is greater than the current hour make row green for future
        else {
            $(this).addClass("future");
        }
    })

}

// save button event listener

// save user input to local storage when user clicks save button

// get from local storage 
$("#hr9 .description").val(localStorage.getItem("hr9"));
$("#hr10 .description").val(localStorage.getItem("hr10"));
$("#hr11 .description").val(localStorage.getItem("hr11"));
$("#hr12 .description").val(localStorage.getItem("hr12"));
$("#hr13 .description").val(localStorage.getItem("hr13"));
$("#hr14 .description").val(localStorage.getItem("hr14"));
$("#hr15 .description").val(localStorage.getItem("hr15"));
$("#hr16 .description").val(localStorage.getItem("hr16"));
$("#hr17 .description").val(localStorage.getItem("hr17"));

// runs the function
currentTime();