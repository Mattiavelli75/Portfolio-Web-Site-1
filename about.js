const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");
const image = document.getElementById('image');
const imageSources = ['./res/open_road2.jpg', './res/fairground.jpg', './res/bullseye.jpg'];
image.src = imageSources[0];

about.addEventListener('click', function(e){
   const id = e.target.dataset.id;
    if (id){    
    // remove active from other buttons
        btns.forEach(function (btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
    // hide other articles
    articles.forEach(function(article) {
       article.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active');
    }
    // change picture according to about articles (dataset.id)
    if (id === 'history'){
        image.src = imageSources[0];
    } else if (id === 'vision') {
        image.src = imageSources[1];
    } else if (id === 'goals'){
        image.src = imageSources[2];
    }
});


//Navbar
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
   links.classList.toggle("show-links");
});

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