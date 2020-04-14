$(document).ready(function () {
    $('.reference').click(function (e) {
        e.stopPropagation();
        $('.showref').removeClass('showref').addClass('hideref');
        var ref = this.getAttribute('data-ref');
        $(ref).removeClass('hideref').addClass('showref');
    });
    $(document).click(function () {
        $('.showref').removeClass('showref').addClass('hideref');
    });
    $(document).keyup(function (e){
       if (e.keyCode == 27) {
           $('.showref').removeClass('showref').addClass('hideref');
       }
    });
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
});