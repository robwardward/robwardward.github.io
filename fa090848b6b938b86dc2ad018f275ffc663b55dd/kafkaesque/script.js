$(document).ready(function () {
    $('.ref').click(function (e) {
        e.stopPropagation();
        $('.showref').removeClass('showref').addClass('hideref');
        var ref = this.getAttribute('data-ref');
        $(ref).removeClass('hideref').addClass('showref');
    });
    $(document).click(function () {
        $('.showref').removeClass('showref').addClass('hideref');
    });
    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            $('.showref').removeClass('showref').addClass('hideref');
        }
    });
});