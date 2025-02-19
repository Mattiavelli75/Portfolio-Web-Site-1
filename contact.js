//Navbar
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
   links.classList.toggle("show-links");
});

// Video play/pause button.
const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btn.addEventListener('click', function () {
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        video.pause();
    }
    else{
        btn.classList.remove('slide');
        video.play();
    }
});

// preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function () {
    preloader.classList.add("hide-preloader");
});