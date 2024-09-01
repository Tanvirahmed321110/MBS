// Playlist hide open
const allPlaylists = document.querySelectorAll('.playlist-main .playlist-videos');
const allPlaylistBtn = document.querySelectorAll('.playlist-main .playlist-head')

allPlaylistBtn.forEach((btn, index) => {
    allPlaylists[index].classList.add('active')
    btn.addEventListener('click', function () {
        const icon = btn.querySelector('i')
        icon.classList.toggle('active')
        allPlaylists[index].classList.toggle('active')
        btn.classList.toggle('active')
    })
})


document.getElementById("screen-btn").addEventListener('click', () => {
    const sidebar = document.querySelector('.all-playlist')
    const videoArea = document.querySelector('.video-area')
    videoArea.classList.toggle("active")
    sidebar.classList.toggle('active')
})