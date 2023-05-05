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

const timeBlock = document.getElementById("time-block");
	timeBlock.innerText = `The current hour is ${hour}`;

	if (hour < 9) {
		timeBlock.classList.remove("present");
		timeBlock.classList.remove("future");
		timeBlock.classList.add("past");
	} else if (hour >= 9 && hour < 17) {
		timeBlock.classList.remove("past");
		timeBlock.classList.remove("future");
		timeBlock.classList.add("present");
	} else {
		timeBlock.classList.remove("past");
		timeBlock.classList.remove("present");
		timeBlock.classList.add("future");
	}


updateTimeBlock();
setInterval(updateTimeBlock, 1000 * 60 * 60);