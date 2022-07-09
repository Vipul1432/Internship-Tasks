function convertFahrenheitToCelcuis() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    if (fahrenheit == '' || fahrenheit < 1) {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Please Enter a Valid Number";
        return;
    }
    fahrenheit = parseFloat(fahrenheit);
    let celcius = (fahrenheit - 32) / 1.8;
    document.getElementById("result").style.color = "green";
    document.getElementById("result").innerHTML = fahrenheit + "&#8457;" + " = " + celcius + "&#8451;";

}

function convertCelciusToFahrenheit() {
    let celcius = document.getElementById("celcius").value;
    if (celcius == '' || celcius < 1) {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Please Enter a Valid Number";
        return;
    }
    celcius = parseFloat(celcius);
    let fahrenheit = (1.8 * celcius) + 32
    document.getElementById("result").style.color = "green";
    document.getElementById("result").innerHTML = celcius + "&#8451;" + " = " + fahrenheit + "&#8457;";
}