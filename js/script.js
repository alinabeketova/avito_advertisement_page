new Swiper('.catalog_image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el:'.swiper-pagination',
        type: 'fraction',
    },
    simulateTouch: false,
    slidesPerView: 1,
    spaceBetween: 10000,
    speed: 1,
    autoHeight: true,
    loop: true,
});