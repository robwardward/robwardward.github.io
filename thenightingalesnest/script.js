//GLOBAL VARS
var notesNum = 28;
var mobileView = false;
var poemHighlightCSS = {
    "background": "linear-gradient(-90deg, #ffff4c, #f8fc5d, #ffff4c)"
    , "background-position": "0 0.2em"
    , "background-repeat": "repeat-x"
    , "background-size": "1em 1.2em"
};
//var storedSec = 1;
//AFFIX POEM ON SCROLL UP
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('.poemanchor1').offset().top;
    //var window_bottom = $(document).height() - $(window).scrollTop() - $(window).height();
    //var div_bottom =  $('.poemanchor2').offset().top - $(window).height();
    if ((div_top - window_top) < 50) {
        $('#poemwrapper').removeClass('poemwrappermove');
        $('#poemwrapper').addClass('poemwrapperfix');
    }
    /*else if ((div_bottom - window_bottom) < 500) {
           $('#poemwrapper').removeClass('poemwrapperfix');
           $('#poemwrapper').addClass('poemwrappermove');
       }*/
    else {
        $('#poemwrapper').removeClass('poemwrapperfix');
        $('#poemwrapper').addClass('poemwrappermove');
    }
};
//GET RID OF POEM HIGHLIGHTING
function unfocus() {
    var i = 1;
    for (i = 1; i <= notesNum; i++) {
        var sec = ".note" + i;
        $(sec).css({
            "background": "rgba(255, 255, 255, 0)"
        });
    }
}
//CHECK FOR MOB
function mobCheck() {
    if ($(window).width() < 1000) {
        mobileView = true;
    }
    else {
        mobileView = false;
    }
}

//DOM-AWARE HANDLER
$(document).ready(function () {
    mobCheck();
    if (mobileView) {
        $("a").on('click', function (event) {
            //move poem into view
            if (this.hash !== "") {
                event.preventDefault();
                //store classname
                var hash = this.hash;
                var num = hash.slice(5);
                var sec = ".note" + num;
                $("#poemwrapper").animate({
                    margin: "1vh 0 0 1vw"
                }, 250);
                $("#mobsheet").animate({
                    margin: "0 0 0 0"
                }, 250);
                setTimeout(250);
                // animated scroll
                $("#poem").animate({
                    scrollTop: $("#poem").scrollTop() + $(hash).position().top - (window.innerHeight / 3)
                }, 500);
                // highlighting
                unfocus();
                $(sec).css(poemHighlightCSS);
                $(sec + " span").css(poemHighlightCSS);
                $("#reset").animate({
                    opacity: "1"
                }, 250);
            }
        });
        $("#reset").on('click', function () {
            $("#reset").animate({
                opacity: "0"
            }, 250);
            unfocus();
            //move poem out of view
            $("#poemwrapper").animate({
                margin: "1vh 0 0 100vw"
            }, 250);
            $("#mobsheet").animate({
                margin: "0 0 0 100vw"
            }, 250);
        });
    }
    else {
        $(window).on("scroll", function () {
            sticky_relocate();
        });
        $("a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                //store classname
                var hash = this.hash;
                var num = hash.slice(5);
                var sec = ".note" + num;
                // animated scroll
                $("#poem").animate({
                    scrollTop: $("#poem").scrollTop() + $(hash).position().top - (window.innerHeight / 3)
                }, 500);
                // highlighting
                unfocus();
                $(sec).css(poemHighlightCSS);
                $(sec + " span").css(poemHighlightCSS);
                $("#reset").animate({
                    opacity: "1"
                }, 250);
                $("#reset").css({
                    cursor: "pointer"
                });
            }
        });
        $("#reset").on('click', function () {
            $("#reset").animate({
                opacity: "0"
            }, 250);
            $("#reset").css({
                cursor: "default"
            });
            unfocus();
        });
    }
});