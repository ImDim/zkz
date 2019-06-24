// Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

$(function() {

    function headerScrolled() {
        var $header = $('.js-site-header');
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 200) {
            $header.addClass('site-header--fixed');
        } else {
            $header.removeClass('site-header--fixed');
        }
        
        setTimeout(function() {
            $header.addClass('site-header--transition');
        }, 200);
    }

    // Обработчик по шагам
    window.onscroll = headerScrolled;

    window.onload = headerScrolled;
});

$(document).on('click', '.js-header-burger, .js-header-nav', function() {
    $('.js-site-header').toggleClass('site-header--opened');
});