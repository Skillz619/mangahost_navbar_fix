(function ($) {
    $(document).ready(function () {

        // hide .navbar first
        $(".navbar").addClass('hideme');

        // fade in .navbar
        $(function () {
            $(window).scroll(function () {
                // set distance user needs to scroll before we fadeIn navbar
                if ($(this).scrollTop() > 100) {
                    $('.navbar').removeClass('hideme');
                } else {
                    $('.navbar').addClass('hideme');
                }
            });
        });
    });
}(jQuery));

/* Show navbar */

$(function () {
    $('#shownav').hover(function () {
        $('.navbar').removeClass('hideme');
    });
});

/* when navbar is hovered over it will override previous */

$(function () {
    $('.navbar').hover(function () {
        $('.navbar').removeClass('hideme');
    }, function () {
        $('.navbar').addClass('hideme');
    });
});.
