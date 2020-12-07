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



window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    //var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      //button.style = "display: none ";
      status.innerHTML = "Thanks!";
      status.classList.add('.succes');
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
      status.classList.add('.error');
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }