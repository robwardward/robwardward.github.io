function makeSpaces(elem, lines) { //PASS CSS FOR ELEM AND # OF PAGE-WIDTHS FOR LINES
    $(".madespace", elem).remove();
    var viewWidth = (($("#main").width()) / 14) * lines
        , spaces = "&nbsp;"
        , i = 0;
    while (i < viewWidth) {
        spaces = spaces + " &nbsp;";
        i++;
    }
    var blankSpace = $("<span> </span>").addClass("madespace").html(spaces);
    $(elem).append(blankSpace);
}
/*function KBFader(elem) {
  var midPoint = ($(window).height() / 2),
      elPosition = ($(elem).offset().top - $(window).scrollTop()),
      elOpacity = (1 - (Math.abs(elPosition - midPoint)) / midPoint);
      $(elem).css("opacity", elOpacity);
}*/
function KBFader(elem) {
    var fadeStart = ($(window).height() * 0.025)
        , elPosition = ($(elem).offset().top - $(window).scrollTop())
        , elOpacity = (elPosition / fadeStart);
    if (elOpacity > 1) {
        $(elem).css("opacity", "1");
    }
    else {
        $(elem).css("opacity", elOpacity);
    };
}
//CALL ON-LOAD FUNCTIONS:
$(function () {
    makeSpaces(".mS1", 1);
    makeSpaces(".mS0875", 0.875);
    makeSpaces(".mS075", 0.75);
    makeSpaces(".mS0625", 0.625);
    makeSpaces(".mS05", 0.5);
    makeSpaces(".mS0375", 0.375);
    makeSpaces(".mS025", 0.25);
    makeSpaces(".mS0125", 0.125);
});
//CALL SCROLL FUNCTIONS:
$(window).scroll(function () {
    KBFader(".KBQ1");
    KBFader(".KBQ2");
    KBFader(".KBQ3");
    KBFader(".KBQ4");
    KBFader(".KBQ5");
    KBFader(".KBQ6");
    KBFader(".KBQ7");
    KBFader(".KBQ8");
    KBFader(".KBQ9");
    KBFader(".KBQ10");
    KBFader(".KBQ11");
    KBFader(".KBQ12");
    KBFader(".KBQ13");
    KBFader(".KBQ14");
});
//CALL ON-RESIZE FUNCTIONS _TWICE_:
$(window).resize(function () {
    makeSpaces(".mS1", 1);
    makeSpaces(".mS0875", 0.875);
    makeSpaces(".mS075", 0.75);
    makeSpaces(".mS0625", 0.625);
    makeSpaces(".mS05", 0.5);
    makeSpaces(".mS0375", 0.375);
    makeSpaces(".mS025", 0.25);
    makeSpaces(".mS0125", 0.125);
});
$(window).on('orientationchange', function () { //MIRROR RESIZE FUNCTIONS HERE
    makeSpaces(".mS1", 1);
    makeSpaces(".mS0875", 0.875);
    makeSpaces(".mS075", 0.75);
    makeSpaces(".mS0625", 0.625);
    makeSpaces(".mS05", 0.5);
    makeSpaces(".mS0375", 0.375);
    makeSpaces(".mS025", 0.25);
    makeSpaces(".mS0125", 0.125);
});