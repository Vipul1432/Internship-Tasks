function checkLeapYear() {
    year = document.getElementById("year").value;
    if (year == '' || year < 1) {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Please Enter a Valid year";
        return;
    }
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "The year " + year + " is a Leap year";
    } else {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "The year " + year + " is NOT a Leap year";
    }
}