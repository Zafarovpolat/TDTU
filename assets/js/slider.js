const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            navigation: {
                enabled: false
            }
        },
        670: {
            slidesPerView: 2,
        },
        1030: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        },
    }

}); 