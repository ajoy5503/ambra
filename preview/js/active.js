(function ($) {
    'use strict';

    // :: Variables  
    var $constrom_window = $(window);


    // ****************************
    // :: 01.0 Preloader Active Code
    // ****************************
    
    $constrom_window.on('load', function () {
        $('.pre-loader-area').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // ********************************
    // :: 02.0 One Page Nav Active Code
    // ********************************

    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 1000,
            easing: 'easeOutQuad'
        });
    }

    // ********************************
    // :: 03.0 Wow Active Code
    // ********************************

    if ($constrom_window.width() > 767) {
        new WOW().init();
    }

    // ****************************************
    // :: 04.0 PreventDefault Click Active Code
    // ****************************************

    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

})(jQuery);