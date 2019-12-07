const intro = document.querySelector('.intro'); //Grabs intro div
const video = intro.querySelector('video'); //Grabs video
const text = intro.querySelector('h1'); //Grabs title

//END SECTION
const section = document.querySelector('section') //Grabs the second section
const end = section.querySelector('h1'); //Title of the second section

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();

//Scenes
const scene = new ScrollMagic.Scene({
    duration: 10000,
    triggerElement: intro,
    triggerHook: 0
}).addIndicators().setPin(intro).addTo(controller);

//Video Animation
let acceleration = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * acceleration;
    console.log(scrollpos, delay);
    video.currentTime = delay;
}, 33.3);