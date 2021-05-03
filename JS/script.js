$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// SLICK SLIDER
$(document).ready(function() {
    $('.slider').slick({
        /* включение стрелочек */
        arrows:true,
        /* отображение точек-меток слайдов */
        dots:true,
        /* автоматически подстраивается под высоту слайда */
        adaptiveHeight:true,
        /* количество отображаемых слайдов */
        slidesToShow: 1,
        /* количество слайдов, которое пролистывается за раз */
        slidesToScroll: 1,
        /* СКОРОСТЬ АНИМАЦИИ ПРОЛИСТЫВАНИЯ [ms] */
        speed: 1000,
        /* ТИП АНИМАЦИИ */
        easing: 'ease',
        /* БЕСКОНЕЧНЫЙ ЛИ СЛАЙД */
        infinite: true,
        /* НОМЕР СТАРТОВОГО СЛАЙДА */
        initialSlide: 0,
        /* АВТОПРОКРУТКА */
        autoplay:true,
        /* СКОРОСТЬ АВТОПРОКРУТКИ */
        autoplaySpeed:6000,
        /* ОСТАНОВКА АВТОПРОКРУТКИ ПРИ КЛИКЕ НА ОБЛОСТЬ СЛАЙДЕРА */
        pauseOnFocus:true,
        /* ОСТАНОВКА АВТОПРОКРУТКИ ПРИ НАВЕДЕНИИ НА ОБЛОСТЬ СЛАЙДЕРА */
        pauseOnHover:true,
        /* ОСТАНОВКА АВТОПРОКРУТКИ ПРИ НАВЕДЕНИИ НА ОБЛОСТЬ ТОЧЕК-МЕТОК */
        pauseOnDotsHover:true,
        /* СВАЙП НА ПК */
        draggable:true,
        /* СВАЙП НА TOUCHSCREEN */
        swipe:true,
        /* РАССТОЯНИЕ ТРИГЕРРА СВАЙПА МЕНШЕ ЧИСЛО - БОЛЬШЕ УСИЛИЙ*/
        touchThreshold:5,
        /* СЛАЙДЕР ТЯНЕТСЯ ЗА ЗАЖАТЫМ КУРСОРОМ ДО ПЕРЕЛИСТЫВАНИЯ */
        touchMove:true,
        /* ИГНОРИРОВАТЬ АНИМАЦИЮ ПРИ ПРЕЖДЕВРЕМЕННОМ ПЕРЕЛИСТЫВАНИИ */
        waitForAnimate:true,
        /* СЛАЙД ПО ЦЕНТРУ */
        centerMode: true,
    });
});