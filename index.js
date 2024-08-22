"use strict";


    
/*let currentIndex = 0;
const textBlocks = document.querySelectorAll(".text-block");
const totalBlocks = textBlocks.length;

function rotateTextBlocks() {
  textBlocks.forEach((block) => block.classList.remove("active"));
  textBlocks[currentIndex].classList.add("active");
}

function showText(index) {
  currentIndex = index;
  rotateTextBlocks();
}

// Initialize the first text block
rotateTextBlocks();

// Rotate text blocks every 4 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalBlocks;
  rotateTextBlocks();
}, 4000);*/



/*let i = 0;
let images = [];
let slideTime = 3000; // 3 seconds

images[0] = 'background1.png';
images[1] = 'background2.png';
images[2] = 'background3.png';

function changePicture() {
    // Set the background image with the correct CSS syntax
    document.body.style.backgroundImage = `url(${images[i]})`;

    // Cycle through the images
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    // Change the picture after slideTime milliseconds
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;*/

/*let i = 0;
let images = [];
let slideTime = 3000; // 3 seconds

// Define the paths to your images
images[0] = 'background1.png';
images[1] = 'background2.png';
images[2] = 'background3.png';

function changePicture() {
    // Set the background with both the gradient and the image
    document.body.style.backgroundImage = `
        linear-gradient(
            to bottom, 
            rgba(126, 90, 255, 1), 
            rgba(85, 183, 255, 1)
        ), 
        url(${images[i]})
    `;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';

    // Cycle through the images
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    // Change the picture after slideTime milliseconds
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;*/

/*document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const textBlocks = document.querySelectorAll('.text-block');
    const totalBlocks = textBlocks.length;

    function rotateTextBlocks() {
        textBlocks.forEach(block => block.classList.remove('active'));
        textBlocks[currentIndex].classList.add('active');
    }

    function showText(index) {
        currentIndex = index;
        rotateTextBlocks();
    }

    // Initialize the first text block
    rotateTextBlocks();

    // Rotate text blocks every 4 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalBlocks;
        rotateTextBlocks();
    }, 4000);
});*/



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("main__mySlides","forth-block__cardSlide");
  let dots = document.getElementsByClassName("dot","forth-block_dot");
  if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


