
const sortBtn = document.getElementById('sort-btn')
const sortDropdown = document.getElementById('sort-dropdown')

sortBtn.addEventListener("click", () => {
    sortDropdown.classList.toggle("active")
})



// three dot
const threeBtns = document.querySelectorAll('.single-post .three-dot-btn')

threeBtns.forEach(button => {
    button.addEventListener('click', function () {
        const dropdown = this.closest('.single-post').querySelector('.three-dot-dropdown');
        dropdown.classList.toggle('active')
    })
})




// hide and open desc
const seeMoreBtns = document.querySelectorAll('.single-post .see-more-btn')
const seeLessBtns = document.querySelectorAll('.single-post .see-less-btn')
const hideDesc = document.querySelectorAll('.single-post .hide-desc')

// open desc
seeMoreBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        const post = this.closest(".single-post")
        const hideDesc = post.querySelector(".hide-desc")
        const seLessBtn = post.querySelector(".see-less-btn")

        hideDesc.classList.add('active')
        seLessBtn.style.display = 'block'
        this.style.display = 'none'
    })
})


// hide desc
seeLessBtns.forEach((btn) => {
    btn.addEventListener("click", function () {

        const post = this.closest('.single-post');
        const hideDesc = post.querySelector('.hide-desc');
        const seeMoreBtn = post.querySelector('.see-more-btn');

        // Hide the description and show the "See More" button
        hideDesc.classList.remove('active');
        seeMoreBtn.style.display = 'block';

        // Hide the "See Less" button
        this.style.display = 'none';
    });
});





// Select all single posts
const posts = document.querySelectorAll('.single-post');

posts.forEach((post) => {
    // Select like button, like display, and icon within the current post
    const likeBtn = post.querySelector('.like-btn-main');
    const likeDisplay = post.querySelector('#like-display');
    const likeBtnIcon = post.querySelector('.like-btn-main i');

    // Initialize the liked state
    let liked = false;

    likeBtn.addEventListener('click', () => {
        // Toggle liked state
        liked = !liked;

        // Update like display and icon based on the liked state
        if (liked) {
            likeDisplay.innerHTML = parseInt(likeDisplay.innerHTML) + 1;
            likeBtnIcon.classList.remove('fa-regular');
            likeBtnIcon.classList.add('fa-solid');
        } else {
            likeDisplay.innerHTML = parseInt(likeDisplay.innerHTML) - 1;
            likeBtnIcon.classList.remove('fa-solid');
            likeBtnIcon.classList.add('fa-regular');
        }
    });
});



// follow
const followBtn = posts.querySelectorAll('.follow-btn')
const followBtnIcon = posts.querySelector('#follow-btn .fa-regular')
let isFollow = false;

followBtn.addEventListener('click', () => {
    if (isFollow) {
        // followBtn.innerHTML = 'followed'
        followBtnIcon.classList.remove('fa-regular')
        followBtnIcon.classList.add('fa-solid')
    }
    else {
        // followBtn.innerHTML = 'follow'
        followBtnIcon.classList.remove('fa-solid')
        followBtnIcon.classList.add('fa-regular')
    }

    isFollow = !isFollow;
})






// leaderboard
const leadBtns = document.querySelectorAll('.leaderboard .tab')
const leadContents = document.querySelectorAll(".body .body-item")




leadBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // remove active class
        leadBtns.forEach((button) => {
            button.classList.remove('active')
        })

        // remove content in  active
        leadContents.forEach(content => content.classList.remove('active'))

        btn.classList.toggle('active')

        leadContents[index].classList.add('active')


    })
})
