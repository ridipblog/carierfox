// var typed_strings = $(".text-slider-items").text();
var text = "arierfox";
var typed = new Typed("#header_text", {
    strings: text.split(","),
    typeSpeed: 50,
    loop: true,
    backDelay: 900,
    backSpeed: 50,
    showCursor:false
});
function nav_fun1(){
    var header_1=document.getElementsByClassName("header_1")[0];
    var navbar_1=document.getElementsByClassName("navbar_div_1")[0];
    var nav_logo=document.getElementById("navbar_logo");
    if(header_1.style.display=="none"){
        header_1.style.display="flex";
        navbar_1.style.display="flex";
        nav_logo.style.transform="rotate(-20deg)";

    }
    else{
        header_1.style.display="none";
        navbar_1.style.display="none";
        nav_logo.style.transform="rotate(0deg)";
    }
}
nav_fun1();