// Makes sure document is loaded, then runs main functions
$(document).ready(function () {

    // variables for current Time/Day/Hour using moment webAPI
    var currentTime=moment().format("MMMM Do YYYY, h:mm:ss a");
    var currentDay=moment().format("MMMM Do YYYY");
    var currentHour=moment().hours();
    // check times using logs
    console.log("Current Time:",currentTime);
    console.log("Current Day:",currentDay);
    console.log("Current Hour:",currentHour); 
    // adds text currentDay to display in header
    $("#currentDay").text(currentDay);

    // get previous task based on hour
    var setHours = ["9","10","11","12","13","14","15","16","17"]

    for(let i=0; i<setHours.length; i++){
        var val = localStorage.getItem(setHours[i]);

        console.log($("#"+setHours[i]).children("textarea").val(val));
    }
        console.log(val);

    // save task/hour button
    $(".saveBtn").on("click", function() {

        var row = $(this).parent();
        var key = row.attr("id");
        var value = row.children("textarea").val();

        localStorage.setItem(key, value);

        console.log(this);
        console.log(row);
        console.log(key,value);
        
    });

    // color panels based on currentHour
    if (currentHour > 9) {
        $("#9").addClass("past");
    } else if (currentHour >= 9 && currentHour < 10) {
        $("#9").addClass("present");
    } else if (currentHour < 9) {
        $("#9").addClass("future");
    }
    if (currentHour > 10) {
        $("#10").addClass("past");
    } else if (currentHour >= 10 && currentHour < 11) {
        $("#10").addClass("present");
    } else if (currentHour < 10) {
        $("#10").addClass("future");
    }
    if (currentHour > 11) {
        $("#11").addClass("past");
    } else if (currentHour >= 11 && currentHour < 12) {
        $("#11").addClass("present");
    } else if (currentHour < 11) {
        $("#11").addClass("future");
    }
    if (currentHour > 12) {
        $("#12").addClass("past");
    } else if (currentHour >= 12 && currentHour < 13) {
        $("#12").addClass("present");
    } else if (currentHour < 12) {
        $("#12").addClass("future");
    }
    if (currentHour > 13) {
        $("#13").addClass("past");
    } else if (currentHour >= 13 && currentHour < 14) {
        $("#13").addClass("present");
    } else if (currentHour < 13) {
        $("#13").addClass("future");
    }
    if (currentHour > 14) {
        $("#14").addClass("past");
    } else if (currentHour >= 14 && currentHour < 15) {
        $("#14").addClass("present");
    } else if (currentHour < 14) {
        $("#14").addClass("future");
    }
    if (currentHour > 15) {
        $("#15").addClass("past");
    } else if (currentHour >= 15 && currentHour < 16) {
        $("#15").addClass("present");
    } else if (currentHour < 15) {
        $("#15").addClass("future");
    }
    if (currentHour > 16) {
        $("#16").addClass("past");
    } else if (currentHour >= 16 && currentHour < 17) {
        $("#16").addClass("present");
    } else if (currentHour < 16) {
        $("#16").addClass("future");
    }
    if (currentHour > 17) {
        $("#17").addClass("past");
    } else if (currentHour >= 17 && currentHour < 18) {
        $("#17").addClass("present");
    } else if (currentHour < 17) {
        $("#17").addClass("future");
    }

})


    // OLDER CODE
    // ===========================================================================

    // run function to get previous task inputs
    // getPrevInput();

    // var inputPrevTask = $("#9am");

    // function getPrevInput() {
    //     var prevTask = localStorage.getItem("task");

    //     inputPrevTask.textContent=prevTask;
    // }

    // console.log(prevTask);

   
  
//   $(".saveBtn").on("click", function() {

//     var saveTask = $(this).parent();
//     var saveHour = $(".row").data();

//     localStorage.setItem(saveHour.value,saveTask);

//     console.log(saveHour.value);
//     console.log(saveTask);

// });
