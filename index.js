"use strict";









let slideIndexes = { 
  mainSlides: 1,
  forthSlides: 1
};
const time = 4000; 

function showSlides(set, n) {
  let i;
  let slides;
  let dots;

  if (set === 'main') {
    slides = document.getElementsByClassName("main__mySlides");
    dots = document.getElementsByClassName("dot");
  } else if (set === 'forth') {
    slides = document.getElementsByClassName("forth-block__cardSlide");
    dots = document.getElementsByClassName("forth-block_dot");
  }

  if (n > slides.length) { 
    slideIndexes[`${set}Slides`] = 1; 
  } 
  if (n < 1) { 
    slideIndexes[`${set}Slides`] = slides.length; 
  }

  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }

 
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

 
  slides[slideIndexes[`${set}Slides`] - 1].style.display = "block"; 
  if (dots[slideIndexes[`${set}Slides`] - 1]) {
    dots[slideIndexes[`${set}Slides`] - 1].className += " active";
  }
}


function changeSlide(set) {
  slideIndexes[`${set}Slides`]++;
  showSlides(set, slideIndexes[`${set}Slides`]);
}


function plusSlides(set, n) {
  showSlides(set, slideIndexes[`${set}Slides`] += n);
}


function currentSlide(set, n) {
  slideIndexes[`${set}Slides`] = n;
  showSlides(set, slideIndexes[`${set}Slides`]);
}


showSlides('main', slideIndexes.mainSlides);
showSlides('forth', slideIndexes.forthSlides);


setInterval(() => changeSlide('main'), time);
setInterval(() => changeSlide('forth'), time);





//Form 



document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Simple validation
  if (name === "" || email === "") {
      alert("Please fill in all fields.");
      return;
  }

  // Here you can add code to submit the form data using an AJAX request or just display a success message
  alert(`Thank you, ${name}! Your message has been sent.`);
  
  // Optionally, reset the form
  this.reset();
});




//Burger

/*const windowElement = document.getElementById("myWindow");
const button = document.getElementById("openWindowBtn");

function toggleModal() {
  if (windowElement.style.display === "block") {
    windowElement.style.display = "none";
    button.textContent = "Open Window";
  } else {
    windowElement.style.display = "block";
    button.textContent = "Close Window";
  }
}

button.addEventListener("click", toggleModal);

windowElement.addEventListener("click", function (event) {
  if (event.target === windowElement) {
    toggleModal();
  }
});*/

/*const burgerMenu = document.getElementById("burgerMenu");
const burgerButton = document.getElementById("burgerButton");
const burgerToggle = document.getElementById("burgerToggle");

function toggleBurgerMenu() {
  if (burgerToggle.checked) {
    burgerMenu.style.transform = "translateY(0)"; // Bring menu into view
    burgerButton.textContent = "✖"; // Change to 'close' icon
  } else {
    burgerMenu.style.transform = "translateY(-100%)"; // Hide menu
    burgerButton.textContent = "☰"; // Change to 'burger' icon
  }
}

burgerButton.addEventListener("click", function() {
  burgerToggle.checked = !burgerToggle.checked; // Toggle checkbox state
  toggleBurgerMenu(); // Call the toggle function
});

burgerMenu.addEventListener("click", function(event) {
  if (event.target === burgerMenu) {
    burgerToggle.checked = false; // Close menu if click outside menu items
    toggleBurgerMenu(); // Call the toggle function
  }
});*/



mediumZoom('.zoom',{
  margin:50
})



document.getElementById("scrollButton").addEventListener("click", function() {
  document.getElementById("targetSection").scrollIntoView({ behavior: 'smooth' });
});






