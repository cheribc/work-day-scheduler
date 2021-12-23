// Display current cay at top of scheduler

var currentDate = moment().format("[Today's date is:] MMMM Do, YYYY");
$("#currentDay").text(currentDate);

// Create timeblocks for each hour from 9am to 5pm
// Insert 'save appt' buttons on each hour timeblock

// baseline time for moment; change color relative to now
var timeBlock = $(".hour");
var now = parseInt(moment().format("H"));

// Time to now: moment().toNow();  moment().toNow(Boolean);

// Create function to check hour blocks for past(grey), present(peach), future(green) change color
$.each(timeBlock, function (i, hour) {
    var hourId = parseInt($(this).attr("id"));
    if (hourId === now) {
        $(this).next().addClass("present");
    } else if (hourId < now) {
        $(this).next().addClass("past");
    } else if (hourId > now) {
        $(this).next().addClass("future");
    } 
});
// create event for Save Appt button click to local storage

$(".saveBtn").on("click", function (event) {
    var calendarItem =
        event.target.parentElement.previousElementSibling.children[0].value;
    localStorage.setItem(event.target.attributes[0].value, calendarItem);
});
    
$(document).ready(function () {
    if (localStorage["9am"] !== null && localStorage["9am"] !== undefined) {
        var nineAm = $("<p>" + localStorage["9am"] + "<p>");
        $("#nineAm").append(nineAm[0]).innerText;
    } else {
        ("");
    }
    if (localStorage["10am"] !== null && localStorage["10am"] !== undefined) {
        var nineAm = $("<p>" + localStorage["10am"] + "<p>");
        $("#tenAm").append(tenAm[0]).innerText;
    } else {
        ("");
    }
    if (localStorage["11am"] !== null && localStorage["11am"] !== undefined) {
        var elevenAm = $("<p>" + localStorage["11am"] + "<p>");
        $("#elevenAm").append(elevenAm[0]).innerText;
    } else {
        ("");
    }
    if (localStorage["12pm"] !== null && localStorage["12pm"] !== undefined) {
        var twelvePm = $("<p>" + localStorage["12pm"] + "<p>");
        $("#twelvePm").append(twelvePm[0]).innerText;
    } else {
        ("");
    }
    if (localStorage["1pm"] !== null && localStorage["1pm"] !== undefined) {
        var onePm = $("<p>" + localStorage["1pm"] + "<p>");
        $("#onePm").append(onePm[0]).innerText;
    } else {
        ("");
    }
    if (localStorage["2pm"] !== null && localStorage["2pm"] !== undefined) {
        var twoPm = $("<p>" + localStorage["2pm"] + "<p>");
        $("#twoPm").append(twoPm[0]).innerText;
    } else {
        ("");
    }
    if (localStorage["2pm"] !== null && localStorage["2pm"] !== undefined) {
        var twoPm = $("<p>" + localStorage["2pm"] + "<p>");
        $("#twoPm").append(twoPm[0]).innerText;
    } else {
        ("");
    }

    if (localStorage["3pm"] !== null && localStorage["3pm"] !== undefined) {
        var threePm = $("<p>" + localStorage["3pm"] + "<p>");
        $("#threePm").append(threePm[0].innerText);
    } else {
        ("");
    }

    if (localStorage["4pm"] !== null && localStorage["4pm"] !== undefined) {
        var fourPm = $("<p>" + localStorage["4pm"] + "<p>");
        $("#fourPm").append(fourPm[0]).innerText;
    } else {
        ("");
    }

    if (localStorage["5pm"] !== null && localStorage["5pm"] !== undefined) {
        var fivePm = $("<p>" + localStorage["5pm"] + "<p>");
        $("#fivePm").append(fivePm[0]).innerText;
    } else {
        ("");
    }
    });
