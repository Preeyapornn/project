const slides = document.querySelectorAll(".wat");
const totalSlides = slides.length;
const itemsPerPage = 4;
const totalSets = Math.ceil(totalSlides / itemsPerPage);
let currentIndex = 0;

const dotsContainer = document.getElementById("dots");
for (let i = 0; i < totalSets; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");

function showSlides(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    for (let i = index * itemsPerPage; i < (index + 1) * itemsPerPage && i < totalSlides; i++) {
        slides[i].classList.add("active");
    }

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

showSlides(currentIndex);

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSets;
    showSlides(currentIndex);
}, 5000);