// Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

$(function() {

    function headerScrolled() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 200) {
            $('.js-site-header').addClass('site-header--fixed');
        } else {
            $('.js-site-header').removeClass('site-header--fixed');
        }
    }

    // Обработчик по шагам
    window.onscroll = headerScrolled;

    window.onload = headerScrolled;
});