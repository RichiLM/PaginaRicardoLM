const swiper = new Swiper('.swiper', {
    // Parametros
    direction: 'horizontal',

    loop: true,

    // Paginación
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Flechas de navegación
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});