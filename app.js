// menu
let navbar = document.querySelector('.header .navbar')
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active')
}
// menu

// controls
document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn => {
    btn.onclick = () => {
        let src = btn.getAttribute('data-src')
        document.querySelector('.about .video-container .video').src = src
    }
})
// controls

AOS.init({
    duration: 800,
    offset: 150,
});