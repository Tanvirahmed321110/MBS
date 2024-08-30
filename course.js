import('./app.js')
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
    const element = document.querySelector('.price-cart-wrapper')
    if (element) {
        if (window.scrollY >= 900) {
            element.classList.add('active')
        }
        else {
            element.classList.remove('active')
        }
    }
})