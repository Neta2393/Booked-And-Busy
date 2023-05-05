$(document).ready(function () {
    // linked moment.js to capture the time and date and input it in webpage
    $("#datetime").text(moment().format("MMMM Do YYYY, h:mm:ss a")); 
    // Added functions to the saveBtn attribute
    $(".saveBtn").on("click", function () {
        console.log(this);
        var text = $(this).siblings("rowtime-block").val(); // 
        var time = $(this).parent().attr("id"); // connected the parent attributes to their children
        localStorage.setItem(time,text);

 });
});
