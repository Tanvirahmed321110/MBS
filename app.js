

// what-new-btn
const whatNewBtn = document.getElementById('what-new-btn')
const whatNewTag = document.getElementById('tag')
const overlay = document.getElementById('overlay');
const whatNewModal = document.getElementById('what-new-modal')
const whatNewModalClose = document.getElementById('what-new-close')

whatNewBtn.addEventListener('click', () => {
    whatNewTag.style.display = 'none'
    whatNewModal.classList.add('active')


    setTimeout(() => {
        overlay.style.display = 'block'
    }, 700)
})

whatNewModalClose.addEventListener('click', () => {
    whatNewModal.classList.remove('active')
    overlay.style.display = 'none'
})


// cart btn
const cartBtn = document.getElementById('cart-btn')
const cartDropdown = document.getElementById('cart-dropdown')

cartBtn.addEventListener('click', function () {
    cartDropdown.classList.toggle('active')
})


// notification
const notification = document.getElementById('notification')
const notificationClose = document.getElementById('close-notification')


notificationClose.addEventListener('click', function () {
    notification.classList.add('hide')
})




// video
document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.banner-video');
    video.playbackRate = 0.5; // Set the video speed to 75%
});



// Step
const buttons = document.querySelectorAll('.step-buttons .btn-fill-dark');
const contentItems = document.querySelectorAll('.step-content-item .step-content');

// Function to show the corresponding content and hide the others
function showContent(index) {
    // Hide all content items
    contentItems.forEach((item, i) => {
        if (i === index) {
            item.style.display = 'flex'; // Show the selected content
        } else {
            item.style.display = 'none'; // Hide other content
        }
    });

    // add a active class
    buttons.forEach((button, i) => {
        if (i === index) {
            button.classList.add('active')
        }
        else {
            button.classList.remove('active')
        }
    })
}

// Attach click event to each button
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        showContent(index);
    });
});



// Initially, show the first content and hide the rest
showContent(0);