function ratioTrigger() {
    if (window.innerWidth < window.innerHeight) {
        $('#ratiomodal').css('display', 'block')
    } else {
        $('#ratiomodal').css('display', 'none')
    };

};

$(document).ready(function () {
    ratioTrigger();
    $('#left').scroll(function () {
        var scrollPerc = ($('#left').scrollTop() - window.innerHeight) / $('.lefttext').innerHeight(),
            newPos = window.innerHeight * scrollPerc * 1.02;
        if ($('#left').scrollTop() < window.innerHeight) {} else {
            $('#leftscroller').css('top', newPos);
        }
    })
    $('#right').scroll(function () {
        var scrollPerc = ($('#right').scrollTop() - window.innerHeight) / $('.righttext').innerHeight(),
            newPos = window.innerHeight * scrollPerc;
        if ($('#right').scrollTop() < window.innerHeight) {} else {
            $('#rightscroller').css('top', newPos);
        }
    })
})

$(window).resize(function () {
    ratioTrigger()
})
