$(document).ready(function(){
//  Save button
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    });

// Value settings for eachtime block, from 9am to 5pm.
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

// Using moment to update the calendar 
    function hourUpdater(){
        var currentHour = moment().hours();


        $(".time-block").each(function(){
            var blockHour = parseInt($(this).attr("id").split("-")[1]);

// Matching the hour establish by the planner (block hour) to moment (the true time shown in currentHour), this shows that currentHour is past block hour, giving it
// "past" css attibutes. Grey Color
            if (blockHour < currentHour){
                $(this).addClass("past");
            }
//Planners hour and Moments hour is the same, "past" changes to present, so "present" attributes in css is applied(yellow)
            else if (blockHour === currentHour){
                $(this).removeClass("past");
                $(this).addClass("present");
            }
//Moments hour is beyond past and present hours, "present" changes to future, so "future" attributes in css is applied (green)
            else{
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");

            }
        })
    }
//hourUpdater is ran again in a cycle
    hourUpdater();

//the calendar is refreshed every 30 seconds by call moment for current time
    var interval = setInterval(hourUpdater, 30000);

//Calendar present day formatting,obtained by moment
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
});