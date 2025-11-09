const figures = document.querySelectorAll("#gallery figure");
const images = Array.from(figures).map(f => f.querySelector("img"));

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.getElementById("close");

let currentIndex = 0;

// Mouse and keyboard hover/focus effects
function handleMouseOver(event) {
    event.target.style.transform = "scale(1.1)";
}
function handleMouseLeave(event) {
    event.target.style.transform = "scale(1)";
}
function handleFocus(event) {
    event.target.style.border = "3px solid blue";
}
function handleBlur(event) {
    event.target.style.border = "2px solid transparent";
}

// Add tabindex to figures
function addTabIndex() {
    figures.forEach(figure => {
        figure.setAttribute("tabindex", "0");
    });
}

// Open lightbox
function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "flex"; // show lightbox
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
    lightboxCaption.textContent = figures[currentIndex].querySelector("figcaption").textContent;
}

// Close lightbox
function closeLightbox() {
    lightbox.style.display = "none"; // hide lightbox
}

// Navigate lightbox
function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    openLightbox(currentIndex);
}
function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    openLightbox(currentIndex);
}

// Attach events
figures.forEach((figure, index) => {
    const img = figure.querySelector("img");

    // Mouse and keyboard effects
    img.addEventListener("mouseover", handleMouseOver);
    img.addEventListener("mouseleave", handleMouseLeave);
    img.addEventListener("focus", handleFocus);
    img.addEventListener("blur", handleBlur);

    // Click or Enter opens lightbox
    figure.addEventListener("click", () => openLightbox(index));
    figure.addEventListener("keydown", e => {
        if (e.key === "Enter") openLightbox(index);
    });
});

// Close lightbox events
closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => {
    if (e.target === lightbox) closeLightbox();
});

// Keyboard navigation inside lightbox
document.addEventListener("keydown", e => {
    if (lightbox.style.display === "flex") {
        if (e.key === "ArrowRight") showNext();
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "Escape") closeLightbox();
    }
});

// Initialize
window.onload = addTabIndex;
