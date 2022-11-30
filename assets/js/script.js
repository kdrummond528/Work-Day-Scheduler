// show todays date in the header/jumbotron
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);

// function to get the current time
function currentTime() {
    // get the hours from current time
    var currentHour = moment().hour();

    // for loop for each of the hour color blocks if past present future
    $(".time-block").each(function () {
        var hourBlock = parseInt($(this).attr("id"));

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

// save user input to local storage when user clicks save button
saveBtn.on("click", function () {

    var hour = $(this).siblings(".description").val();

})

// get from local storage 
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

// runs the function
currentTime();