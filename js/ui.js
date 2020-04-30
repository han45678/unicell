window.onload = function () {

};
$(document).ready(function () {
    $("header nav ul li").click(function () {
        $(this).toggleClass("active");
    });
    $("#menu_button").click(function () {
        $(this).toggleClass("active");
        $('header nav').toggleClass("active");
        $('header #language').toggleClass("active");
    });
    $('#company .slick').slick({
        arrows:false,
        autoplay:true,
        dots:true,
    });
});