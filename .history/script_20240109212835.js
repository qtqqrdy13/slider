const slider = document.querySelector(".slider");
const slidesContainer = document.querySelector(".slides-container");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);
function nextSlide(){
    slides[currentIndex].style.transform = "rotateY(90deg) scale(0.8)";
    slides[currentIndex].style.transformOrigin ="left center";
    currentIndex++;
    if(currentIndex >= slides.length){
        currentIndex = 0;
    }
    slides[currentIndex].style.transform = "rotateY(0deg) scale(1)";
    slides[currentIndex].style.transformOrigin ="center center";
}
function prevSlide(){
    slides[currentIndex].style.transform = "rotateY(-90deg) scale(0.8)";
    slides[currentIndex].style.transformOrigin ="right center";
    currentIndex--;
    if(currentIndex <0){
        currentIndex = slides.length - 1;
    }
    slides[currentIndex].style.transform = "rotateY(0deg) scale(1)";
    slides[currentIndex].style.transformOrigin ="center center";
}

