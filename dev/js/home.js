// navbar scroll
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 60) {

            $(".navbar").addClass("bg-light");
        } else {
            $(".navbar").removeClass("bg-light");
        }
    });
});

$(document).ready(function () {

    // invoke the carousel
    $('#vertCarousel').carousel({
        interval: 3000,
    });
    $('#featCarousel').carousel({
        interval: 3000,
    });

    // scroll slides on mouse scroll
    $('#vertCarousel').bind('mousewheel DOMMouseScroll', function (e) {
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $(this).carousel('prev');
        } else {
            $(this).carousel('next');
        }
    });

    //scroll slides on swipe for touch enabled devices
    $('#vertCarousel').on('touchstart', function (event) {
        var yClick = event.originalEvent.touches[0].pageY;
        $(this).one('touchmove', function (event) {
            var yMove = event.originalEvent.touches[0].pageY;
            if (Math.floor(yClick - yMove) > 1) {
                $('.carousel').carousel('next');
            } else if (Math.floor(yClick - yMove) < -1) {
                $('.carousel').carousel('prev');
            }
        });
        $('.carousel').on('touchend', function () {
            $(this).off('touchmove');
        });
    });

    //small button group
    $('.filter-button').click(function () {
        var value = $(this).attr('data-filter');

        if (value == 'all') {
            $('.filter').show();
        } else {
            $('.filter')
                .not('.' + value)
                .hide();
            $('.filter')
                .filter('.' + value)
                .show();
        }
        $('.filter-button').removeClass('active');
        $(this).addClass('active');
    });

    //image gallery hover effect
    $('.gallery_product').mouseenter(function () {
        $(this).find('.card-hover').css({ top: '0' });
    })
    $('.gallery_product').mouseleave(function () {
        $(this).find('.card-hover').css({ top: '100%' });
    });
});

$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10, //Total duration for count up animation
        time: 1800 // delay in milliseconds per number count up
    });
});

