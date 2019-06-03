// Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

$(function() {

    // Нажимаем кнопку "Начать"
    $('.js-recipe-start').on('click', function() {

        // Прячем кнопку "Начать"
        $(this).addClass('recipe-start--hidden');

        // Показываем кнопку "Удачи!"
        $('.js-recipe-started').addClass('recipe-start--visible');

        // Показываем шаги
        $('.js-steps').addClass('steps--visible');

        $('.js-recipe-content').addClass('recipe-content--inline');
    });

    // Обработчик по шагам
    $(document).on('click', '.js-steps', function(evt) {
        var $item = $(evt.target).closest('.steps-item');
        if ( $item.length && $item.hasClass('active') ) {
            $item.addClass('done').removeClass('active');

            $item.nextAll('.steps-item').eq(0).addClass('active');
        }
    });
});