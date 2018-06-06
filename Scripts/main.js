$(document).ready(function(){

    $('.container').cycle({
        'fx':'fade',
        'speed' : 1000,
        next:   '.next',
        prev:   '.back',
        cssBefore: {
            display: 'inline-flex'
        },
        cssAfter: {
            display: 'inline-flex'
        }
    });

    $(".login").click(function () {
        $(".part4").fadeIn(500);
    });

    $(".times").click(function () {
        $(".part4").fadeOut(500);
    });

    $(".about-btn").click(function () {
        $("html, body").animate({
            scrollTop: $(".part1").offset().top - 50
        }, 500);
    });

    $(".team-btn").click(function () {
        $("html, body").animate({
            scrollTop: $(".pol2").offset().top - 50
        }, 500);
    });

    $(".proj-btn").click(function () {
        $("html, body").animate({
            scrollTop: $(".part3").offset().top - 50
        }, 500);
    });
});