//AFFIX POEM ON SCROLL UP
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('.poemanchor1').offset().top;
    if ((div_top - window_top) < 0) {
        $('#poemwrapper').removeClass('poemwrappermove');
        $('#poemwrapper').addClass('poemwrapperfix');
    } else {
        $('#poemwrapper').removeClass('poemwrapperfix');
        $('#poemwrapper').addClass('poemwrappermove');
    }
};

//POLITE REQUEST TO HOLD PHONE IN LANDSCAPE
function ratioTrigger() {
    if (window.innerWidth < window.innerHeight) {
        $('#ratiomodal').css('display', 'block')
        $('#main').css('opacity', '0')
        $('#main').css('scroll', 'none')
    } else {
        $('#ratiomodal').css('display', 'none')
        $('#main').css('opacity', '1')
        $('#main').css('scroll', 'default')
    };

};

//DOM-AWARE HANDLER
$(document).ready(function () {
    ratioTrigger()
    $(window).on("scroll", function () {
        sticky_relocate();
        var titleOpacity = 1 - ($(window).scrollTop() / window.innerHeight) * 2;
        $('#title').css('opacity', titleOpacity)
    });
});

$(window).resize(function () {
    ratioTrigger()
})


