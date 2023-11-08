// Function to convert the temperature in Celsius to other measures
function tempconvertcfk() {
    var inputC = parseFloat($(".inpc").val());
    var k = inputC + 273.15;
    var f = (inputC * 9/5) + 32;
    $(".solc").text("Equivalent to " + k.toFixed(2) + "° Kelvin and " + f.toFixed(2)+
     "° Fahrenheit");
}

// Function to convert the temperature in Fahrenheit to other measures
function tempconvertfck() {
    var inputF = parseFloat($(".inpf").val());
    var c = (inputF - 32) * 5/9;
    var k = c + 273.15;
    $(".solf").text("Equivalent to " + c.toFixed(2) + "° Celsius and " + k.toFixed(2)+
     "° Kelvin");
}

// Function to convert the temperature in Kelvin to other measures
function tempconvertkcf() {
    var inputK = parseFloat($(".inpk").val());
    var c = inputK - 273.15;
    var f = (c * 9/5) + 32;
    $(".solk").text("Equivalent to " + c.toFixed(2) + "° Celsius and " + f.toFixed(2)+
     "° Fahrenheit");
}

