$(document).ready(function () {
    //SCROLLING BEHAVIOUR
    $(window).scroll(function () {
        var scrollCalc = ($(window).scrollTop() - (window.innerHeight / 3)) / (window.innerHeight / 3)
            , titleOpacity = Math.max((1 - scrollCalc), 0.01);
        $("#titlebox").css({
            'opacity': titleOpacity
        });
    });
    //POEM SHOW/HIDE
    $('.poem').click(function () {
        $('#poembox').css({
            'display': 'block'
        });
        $('body').addClass('noscroll');
    });
    $('.closebutton').click(function () {
        $('#poembox').css({
            'display': 'none'
        });
        $('body').removeClass('noscroll');
    });
    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            $('#poembox').css({
                'display': 'none'
            });
            $('body').removeClass('noscroll');
        }
    });
    //CURSOR MOVEMENT
    $('body').mousemove(function (e) {
        var mouseX = e.pageX
            , mouseY = e.pageY - $(window).scrollTop();
        $('#cursor').css({
            'left': mouseX
            , 'top': mouseY
        })
    });
    //CURSOR SHOW/HIDE
    $('body').mouseenter(function () {
        $('#cursor').animate({
            opacity: 1
        }, 100);
    });
    $('body').mouseleave(function () {
        $('#cursor').animate({
            opacity: 0
        }, 100);
    });
    //CURSOR CHANGE FOR LINKS
    $('a, .underpoem, .closebutton').mouseenter(function () {
        $('.cursor').css({
            visibility: 'hidden'
        });
        $('.pointer').css({
            visibility: 'visible'
        });
    });
    $('a, .underpoem, .closebutton').mouseleave(function () {
        $('.cursor').css({
            visibility: 'visible'
        });
        $('.pointer').css({
            visibility: 'hidden'
        });
    });
});

