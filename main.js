let scrollBar = document.getElementById('scrollbar');
let height = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
    let scrollHeight = (window.pageYOffset / height) / 100
    scrollBar.style.height = `${scrollHeight}%`
}