$(function() {

    $('.scroll[href^="#"]').on('click', function(event){
        event.preventDefault();
        var anchor = this.hash;
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 600);
    });//scroll якорів

    var $nav = $("nav");
    var $height = $('header').innerHeight();
    console.log($height);

    $(window).scroll(function () {
        if ($(this).scrollTop() > $height && $nav.hasClass("nav-default")) {
            $nav.fadeOut('fast', function () {
                $(this).removeClass("nav-default")
                    .addClass("nav-fixed")
                    .fadeIn('fast');
            });
        } else if ($(this).scrollTop() <= $height && $nav.hasClass("nav-fixed")) {
            $nav.fadeOut('fast', function () {
                $(this).removeClass("nav-fixed")
                    .addClass("nav-default")
                    .fadeIn('fast');
            });
        }
    });//scroll-nav

});