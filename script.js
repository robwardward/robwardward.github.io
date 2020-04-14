function MenuFader(elem) {
    var fadeStart = ($(window).height() * 0.2)
        , elPosition = ($(elem).offset().top - $(window).scrollTop())
        , elOpacity = (elPosition / fadeStart);
    if (elOpacity > 1) {
        $(elem).css("opacity", "1");
    }
    else {
        $(elem).css("opacity", elOpacity);
    };
}

$(".menuscroller").scroll(function () {
    MenuFader(".menuitem");
});