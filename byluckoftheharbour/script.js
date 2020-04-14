$(document).ready(function () {
    $(window).on("scroll", function () {
        var bgOpacity = 1 - ($(window).scrollTop() / window.innerHeight) * 1.5;
        if (bgOpacity > 0.25) {
            $('#titlebox').css('opacity', bgOpacity)
        } else {
            $('#titlebox').css('opacity', 0.25)
        }
    });
});


