

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
if (document.querySelector('.banner-video')) {
    document.addEventListener('DOMContentLoaded', function () {
        const video = document.querySelector('.banner-video');
        video.playbackRate = 0.5; // Set the video speed to 75%

    });
}




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



// See more modal
const seeMoreButtons = document.querySelectorAll('.students-reviews-item .see-more-btn');
const closeButtons = document.querySelectorAll('.students-reviews-item .close-btn');


seeMoreButtons.forEach(button => {
    button.addEventListener('click', function () {
        const modal = this.closest('.students-reviews-item').querySelector('.modal-message');
        modal.classList.add('active')
    })
})

closeButtons.forEach(button => {
    button.addEventListener('click', function () {
        const modal = this.closest('.students-reviews-item').querySelector('.modal-message');
        modal.classList.remove('active')
    })
})






// big video modal
const bigVideoModal = document.getElementById('big-video-modal')
const bigVidePlayBtn = document.getElementById('big-video-play-btn');
const bigVideoElement = bigVideoModal.querySelector('video');

if (bigVidePlayBtn) {
    bigVidePlayBtn.addEventListener('click', function () {
        bigVideoModal.classList.add('active')
        bigVideoElement.play()
    })
}




const messageVideoBtns = document.querySelectorAll('.body-resources-items .message-course-video');

messageVideoBtns.forEach(button => {
    button.addEventListener('click', function () {
        const videoElement = button.querySelector('video source');
        const videoSrc = videoElement.getAttribute('src');

        bigVideoElement.querySelector('source').setAttribute('src', videoSrc);
        bigVideoElement.load(); // Reload the video with the new source
        bigVideoModal.classList.add('active');
        bigVideoElement.play();
    });
});





// students reviews video
const playButtons = document.querySelectorAll('.students-reviews-items .play-btn');
const videoModal = document.querySelector('.video-modal');
const videoElement = videoModal.querySelector('video');

playButtons.forEach(button => {
    button.addEventListener('click', function () {
        const videoSrc = this.closest('.video').querySelector('video source').src;

        // set video in the modal
        videoElement.querySelector('source').src = videoSrc;

        // load and play
        videoElement.load()
        videoElement.play()

        videoModal.classList.add('active')
    })
})


// modal close
const modalClose = document.querySelectorAll('.modal .close-btn');

modalClose.forEach(button => {
    button.addEventListener('click', function () {
        const modal = this.closest('.modal')
        const video = modal.querySelector('video'); // Find the video element inside the modal

        if (video) {
            video.pause(); // Pause the video
        }
        bigVideoModal.classList.remove('active')
        videoModal.classList.remove('active')
        modal.classList.remove('active')
    })
})




// Message and chat
const messageBtn = document.getElementById('message-btn')
const messageModal = document.getElementById('message-modal')

const chatBtn = document.getElementById('chat-btn')
const chatToltip = document.getElementById('chat-toltip')

messageBtn.addEventListener('click', function () {
    messageBtn.classList.remove('active')
    messageModal.classList.add('active')
    alert('clicked')
})

// chat
chatBtn.addEventListener('click', function () {
    chatToltip.classList.toggle('active')
})

// close message
document.getElementById('message-close').addEventListener('click', function () {
    messageModal.classList.remove('active')
    messageBtn.classList.add('active')
})





// Message and platform
const otherPlatfromBtn = document.getElementById('other-platfrom')
const otherPlatfromBody = document.getElementById('other-platfrom-body')
const messageModalBody = document.querySelector('.message-body  .body-items')
const platfromBody = document.querySelector('.message-body .platfrom-body')
const messageFooterBtn = document.getElementById('chat-btn')
const platfromFooterBtn = document.getElementById('platfrom-back-btn')

otherPlatfromBtn.addEventListener('click', () => {
    messageModalBody.classList.add('active');
    platfromBody.classList.add('active')
    messageFooterBtn.classList.add('active')
    platfromFooterBtn.classList.add('active')
})

// Back button
platfromFooterBtn.addEventListener('click', function () {
    messageModalBody.classList.remove('active');
    platfromBody.classList.remove('active')
    messageFooterBtn.classList.remove('active')
    platfromFooterBtn.classList.remove('active')
})
