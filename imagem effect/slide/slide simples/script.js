let currentIndex = 0;
const images = document.getElementsByClassName('slide-img');

function showNextImageCardPortfolio() {
 images[currentIndex].style.opacity = 0;
 currentIndex = (currentIndex + 1) % images.length;
 images[currentIndex].style.opacity = 1;
}


showNextImageCardPortfolio();
setInterval(showNextImageCardPortfolio, 3000);