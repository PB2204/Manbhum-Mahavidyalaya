$(document).ready(function () {

    var slider = $('.bxslider');
    slider.bxSlider({
        auto: true,
        onSlideAfter: function () {
            slider.startAuto()
        }
    });


    var slider1 = $('.slider1');
    slider1.bxSlider({
        slideWidth: 157,
        minSlides: 3,
        maxSlides: 3,
        slideMargin: 20,
        auto: true,
        moveSlides: 1,
        onSlideAfter: function () {
            slider1.startAuto()
        }
    });


    // TOP DROP DOWN MENU

    $('.navigation ul li').hover(function () {
        $(this).children('a:first-child').addClass('current');
        $(this).children('ul').stop(true, true).slideDown('medium').show();
    },
        function () {
            $(this).children('a:first-child').removeClass('current');
            $(this).children('ul').stop(true, true).slideUp('fast');
        }
    );

})


$(document).ready(function () {
    var highestBox = 0;
    $('.body-panel .column').each(function () {
        if ($(this).height() > highestBox) {
            highestBox = $(this).height();
        }
    });
    $('.container .column').height(highestBox);

});