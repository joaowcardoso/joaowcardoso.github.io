// Product Carousel
let currentImageIndex = 0;
const carouselImages = [
    "images/Echeveria_Plant_fcyp-36.jpg",  // First image in the carousel
    "images/anemone-blubs-mix-blue-shades.jpg",  // Second image in the carousel
    "images/strawberry-plant-1.jpg"  // Third image in the carousel
];

const carouselImageElement = document.getElementById('carousel-image');

document.getElementById('next-btn').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;  // Increment index and loop back to 0
    carouselImageElement.src = carouselImages[currentImageIndex];
});

document.getElementById('prev-btn').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;  // Decrement index and loop back to last image
    carouselImageElement.src = carouselImages[currentImageIndex];
});
