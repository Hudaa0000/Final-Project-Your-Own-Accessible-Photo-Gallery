const images = document.querySelectorAll("#gallery figure img");
const figures = document.querySelectorAll("#gallery figure");

// Mouse and keyboard effects
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
    figures.forEach((figure, i) => {
        figure.setAttribute("tabindex", "0");
    });
}

// Lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.getElementById("close");

// Open lightbox when image clicked
figures.forEach(figure => {
    const img = figure.querySelector("img");
    const caption = figure.querySelector("figcaption").textContent;

    // Mouse events
    img.addEventListener("mouseover", handleMouseOver);
    img.addEventListener("mouseleave", handleMouseLeave);
    img.addEventListener("focus", handleFocus);
    img.addEventListener("blur", handleBlur);

    // Click to open lightbox
    figure.addEventListener("click", () => {
        lightbox.classList.remove("hidden");
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = caption;
    });

    // Enter key on figure also opens lightbox
    figure.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            lightbox.classList.remove("hidden");
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxCaption.textContent = caption;
        }
    });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
    lightbox.classList.add("hidden");
});

// Close lightbox when clicking outside image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.add("hidden");
    }
});

// Initialize
window.onload = addTabIndex;

