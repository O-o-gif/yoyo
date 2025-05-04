function result() {
    var x = parseFloat(document.getElementById("myinput").value);
    var select = document.getElementById("myselect");
    var value = parseInt(select.value);

    var select2 = document.getElementById("myselect2");
    var value2 = parseInt(select2.value);

    var y;
    if (value >= value2) {
        y = x * Math.pow(10, value - value2);
    } else {
        y = x / Math.pow(10, value2 - value);
    }

    alert("The result is: " + y);
}