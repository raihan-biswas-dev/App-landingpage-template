$(function ($) {
    'use strict';


    //Banner Slider Start

    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows: false,
    });

    //Screenshot Slider PArt

    $('.screenshot_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows: false,
    });




    //Feedback Slider Start


    $('.feedback_text_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.feedback_img_slider',
    });

    $('.feedback_img_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.feedback_text_slider',
        dots: true,
        autoplay: true,
        centerMode: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: 0,
        arrows: false,
    });



    //Menu fix

    var navoff = $('.main_menu').offset().top;


    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }
    });


    //btn top and bottom start

    $('.tp_bm').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 1500);
    });

    $(window).scroll(function () {
        var btscroll = $(this).scrollTop();

        if (btscroll > 300) {
            $('.tp_bm').fadeIn();
        } else {
            $('.tp_bm').fadeOut();
        }
    });


});