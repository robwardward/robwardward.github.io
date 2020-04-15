$(document).ready(function () {
    $(window).on("scroll", function () {
        var titleOpacity = 1 - ($(".menuscroller").scrollTop() / window.innerHeight) * 2;
        $('.logocover').css('opacity', titleOpacity)
    });
});