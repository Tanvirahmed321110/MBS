var swiper = new Swiper('.related-items-body', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false // Autoplay continues even when user interacts with slides
    },
    navigation: { // Navigation arrows
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: { // Responsive breakpoints
        768: { // when window width is >= 768px
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: { // when window width is >= 1024px
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});




var swiper2 = new Swiper(".popular-courses-area", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // Allows the pagination bullets to be clickable
    },
    slidesPerView: 1, // How many slides to show at once
    spaceBetween: 10, // Space between each slide
    loop: true, // Enables continuous loop mode
    speed: 1000, // Transition speed
    autoplay: {
        delay: 2000, // Delay between transitions (in ms)
        disableOnInteraction: false // Autoplay continues even when user interacts with slides
    },
    breakpoints: { // Responsive breakpoints
        768: { // when window width is >= 768px
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: { // when window width is >= 1024px
            slidesPerView: 2,
            spaceBetween: 30
        }
    }
});
