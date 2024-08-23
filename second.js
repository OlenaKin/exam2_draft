/*"use strict";

let slideIndex = 0; 
let slides = document.getElementsByClassName("forth-block__cardSlide"); 
let dots = document.getElementsByClassName("forth-block_dot"); 
let time = 3000; 


function changeSlide() {
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", ""); 
  }

  
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 } 

  
  slides[slideIndex - 1].style.display = "block";
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].className += " active";
  }
}


changeSlide();


setInterval(changeSlide, time);*/
/*

"use strict";

let slideIndex = 0; 
let slides = document.getElementsByClassName("forth-block__cardSlide"); 
let dots = document.getElementsByClassName("forth-block_dot"); 
let time = 3000; 


function changeSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", ""); 
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 } 

  slides[slideIndex - 1].style.display = "block";
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].className += " active";
  }
}


function currentSlide(n) {
  slideIndex = n - 1; 
  changeSlide();      }


changeSlide();


setInterval(changeSlide, time);




