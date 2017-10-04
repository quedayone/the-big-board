$(document).ready(function () {
    window.setInterval(function () {
        var iTimeRemaining = $("#spnSeconds").html();
        iTimeRemaining = eval(iTimeRemaining);
        if (iTimeRemaining == 0) {
            location.href = "../the-big-board/two.html";
        } else {
            $("#spnSeconds").html(iTimeRemaining - 1);
        }
    }, 1000);
});