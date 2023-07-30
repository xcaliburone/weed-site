const galleryImage = document.querySelectorAll('.galeri-foto');

galleryImage.forEach((img, i) => {
    img.dataset.aos = 'fade-down';
    img.dataset.aosDelay = i * 100;
});