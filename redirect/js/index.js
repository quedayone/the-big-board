$(document).ready(function () {
    window.setInterval(function () {
        var iTimeRemaining = $("#spnSeconds").html();
        iTimeRemaining = eval(iTimeRemaining);
        if (iTimeRemaining == 0) {
            location.href = "http://10.0.0.2/display/two.html";
        } else {
            $("#spnSeconds").html(iTimeRemaining - 1);
        }
    }, 1000);
});