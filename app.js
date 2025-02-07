// Javascript Matthew Williams 12/01/2025
// Video background controls

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

//Navbar
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
   links.classList.toggle("show-links");
});

document.getElementById("synth2").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link action

    let screenWidth = 2000;
    let screenHeight = 800;
    

    let left = (screen.width - screenWidth) / 2 ;
    let top = (screen.height - screenHeight) / 2 ;

    window.open(this.href, "_blank", `width=${screenWidth}, height=${screenHeight}, top=${top}, left${left} ,scrollbars=yes`);
});




