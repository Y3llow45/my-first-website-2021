var img = document.getElementById("thePIC");

var slider1 = document.getElementById("slider1");
var slider2 = document.getElementById("slider2");
var slider3 = document.getElementById("slider3");

var sepia = slider1.value;
var blur = slider2.value;
var grayscale = slider3.value;

slider1.addEventListener("input", function () {
    sepia = this.value;
    img.style["-webkit-filter"] = "blur(" + blur + "px) sepia(" + this.value + "%) grayscale(" + grayscale + "%)";
});

slider2.addEventListener("input", function () {
    blur = this.value;
    img.style["-webkit-filter"] = "blur(" + this.value + "px) sepia(" + sepia + "%) grayscale(" + grayscale + "%)";
});

slider3.addEventListener("input", function () {
    grayscale = this.value;
    img.style["-webkit-filter"] = "blur(" + blur + "px) sepia(" + sepia + "%) grayscale(" + this.value + "%)";
});