const navslide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelector('.nav-links-li');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    nav.addEventListener('click', function(){
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
    })
    });

    

}
navslide();


const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.4 + "px";
})



//SMOOTH SCROLL FUNCTION
function smoothScroll(target){
    var target = document.querySelector(target);
    var targetPosition = target.offsetTop - 123;
    window.scrollTo(0, targetPosition);
}



var servicesSection = document.getElementById('servicesButton');
servicesSection.addEventListener('click', function(){
    smoothScroll('.services');
})
var aboutSection = document.getElementById('aboutButton');
aboutSection.addEventListener('click', function(){
    smoothScroll('.about');
})
var homeSection = document.getElementById('homeButton');
homeSection.addEventListener('click', function(){
    smoothScroll('.hero');
})
var contactSection = document.querySelector('.contactButton');
contactSection.addEventListener('click', function(){
    smoothScroll('.contact-us');
})


