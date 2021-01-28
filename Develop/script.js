// Makes sure document is loaded, then runs main functions
$(document).ready(function () {

    // variables for current Time/Day using moment webAPI
    var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    var currentDay = moment().format("MMMM Do YYYY");
    // check times using logs
    console.log (currentTime);
    console.log (currentDay);
    // adds text currentDay to display in header
    $("#currentDay").text(currentDay);





















})