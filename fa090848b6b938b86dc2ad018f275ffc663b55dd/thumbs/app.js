//var titleIntensity, posY, posX, transPos;
//
//function titleCalc(e) {
//    var posY = (e.pageX - (window.innerWidth / 2)) / (window.innerWidth / titleIntensity)
//        , posX = (e.pageY - $('body').scrollTop() - (window.innerHeight / 2)) / (window.innerHeight / titleIntensity)
//        , transPos = 'rotateX(' + posX + 'deg) rotateY(' + posY + 'deg)';
//}
//
//function titleMove() {
//    var titleIntensity = 50;
//    titleCalc();
//    $('.title').css({
//        'transform': transPos
//    });
//}
$(document).ready(function () {
    //setInterval(titleMove, 17);
    $(window).scroll(function () {
        var scrollCalc = ($(window).scrollTop() - (window.innerHeight / 2)) / (window.innerHeight / 2)
            , titleOpacity = Math.max((1 - scrollCalc), 0.05)
            , blurCalc = Math.min(scrollCalc * 10, 15)
            , titleBlur = 'blur(' + blurCalc + 'px)';
        $("#titlebox").css({
            'opacity': titleOpacity
            , 'filter': titleBlur
        });
    })
    $('.poem').click(function () {
        $('#poembox').css({
            'display': 'block'
        });
        $('body').addClass('noscroll');
        $('p').addClass('addblur');
    });
    $('#poembox').click(function () {
        $('#poembox').css({
            'display': 'none'
        });
        $('body').removeClass('noscroll');
        $('p').removeClass('addblur');
    });
    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            $('#poembox').css({
                'display': 'none'
            });
            $('body').removeClass('noscroll');
        }
    });
    $('body').mousemove(function (e) {
        var mouseX = e.pageX
            , mouseY = e.pageY - $('body').scrollTop();
        $('.circle').css({
            'left': mouseX
            , 'top': mouseY
        })
    });
    $('body').mouseenter(function () {
        $('.circle').animate({
            opacity: 1
        }, 100);
    });
    $('body').mouseleave(function () {
        $('.circle').animate({
            opacity: 0
        }, 100);
    });
    document.body.addEventListener('touchstart', function (e) {
        $('body').css({
            'background-color': 'red'
        });
        $('#main').css({
            'color': 'white'
        });
    }, false);
    document.body.addEventListener('touchend', function (e) {
        $('body').css({
            'background-color': 'white'
        });
        $('#main').css({
            'color': 'red'
        });
    }, false);
});

