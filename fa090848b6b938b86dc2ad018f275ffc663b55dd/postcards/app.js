var currentPC = '#one';
var transitionSpeed = 500;

function show() {
    $(currentPC).css('display', 'block');
    $(currentPC).animate({
        opacity: 1
    }, transitionSpeed);
    $('body').addClass('noscroll');
};

function reset() {
    $(currentPC).animate({
        opacity: 0
    }, transitionSpeed);
    setTimeout(function(){
        $(currentPC).css('display', 'none');
    }, transitionSpeed);
    $('body').removeClass('noscroll');
};
$(document).ready(function () {
    $('#first').click(function () {
        currentPC = '#one';
        show();
    });
    $('#second').click(function () {
        currentPC = '#two';
        show();
    });
    $('#third').click(function () {
        currentPC = '#three';
        show();
    });
    $('#fourth').click(function () {
        currentPC = '#four';
        show();
    });
    $('#fifth').click(function () {
        currentPC = '#five';
        show();
    });
    $('#sixth').click(function () {
        currentPC = '#six';
        show();
    });
    $('#seventh').click(function () {
        currentPC = '#seven';
        show();
    });
    $('#notes').click(function () {
        currentPC = '#bibliography';
        show();
    });
    $('.resetbutton').click(function () {
        reset();
    });
    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            reset();
        }
    });
});

