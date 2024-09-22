var images = document.querySelectorAll('.gallery img');
var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightbox-img');
var currentIndex = 0;

function openLightbox() {
    lightbox.style.display = "block";
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function setImage(index) {
    currentIndex = index;
    lightboxImg.src = images[index].src;
}

function changeImage(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    setImage(currentIndex);
}
