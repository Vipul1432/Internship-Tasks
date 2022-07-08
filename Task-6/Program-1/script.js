function checkForPrime() {
    num = document.getElementById("number").value;
    if (num == '' || num < 1) {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Please Enter a Positive Integer Number";
        return;
    }
    var isPrime = true;
    if (num == 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < num - 1; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime == true) {
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "The number " + num + " is a Prime Number";
    } else {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "The number " + num + " is NOT a Prime Number";
    }
}