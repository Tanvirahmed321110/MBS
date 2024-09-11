import('./app.js')
import('./slider.js')

// Select elements
const courseBannerBtn = document.getElementById("course-banner-video");
const bannerVideoIframe = document.querySelector('.banner-video iframe');

const bigVideoModals = document.getElementById('big-video-modal');
const modalVideo = document.querySelector('.big-video-modal .video');
const closeModalBtn = document.querySelector('.big-video-modal .close-btn');

// Event listener for button click
courseBannerBtn.addEventListener("click", function () {
    const iframe = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ci0WbaUH3no?si=XMVu6GDlSwUnzXmu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `
    modalVideo.innerHTML = iframe;
    bigVideoModals.classList.add('active')

});



// scroll in the page
window.addEventListener('scroll', function () {
    const element = document.querySelector('.price-cart-wrapper');
    const priceCart = document.querySelector('.price-cart');
    const footer = document.querySelector('footer');
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (element) {
        // Toggle the 'active' class based on scroll position
        if (window.scrollY >= 900) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    }

    // Hide price cart when the footer is in view
    if (footerTop <= windowHeight) {
        priceCart.style.display = 'none';
    } else {
        priceCart.style.display = 'block';
    }
});









// Playlist hide open
const allPlaylists = document.querySelectorAll('.course-playlist .playlist-videos');
const allPlaylistBtn = document.querySelectorAll('.course-playlist-item .playlist-head')

allPlaylistBtn.forEach((btn, index) => {
    btn.addEventListener('click', function () {
        allPlaylists[index].classList.toggle('active')
        btn.classList.toggle('active')
    })
})



// reviews hide open
const reviewHideOpenBtn = document.getElementById('reviews-hide-open')
const reviewsBody = document.getElementById('reviews-items')

reviewHideOpenBtn.addEventListener('click', function () {
    reviewsBody.classList.toggle('active')
    reviewHideOpenBtn.classList.toggle('active')
})