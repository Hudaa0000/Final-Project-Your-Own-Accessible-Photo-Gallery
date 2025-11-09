// Select all images
const images = document.querySelectorAll("#gallery figure img");

// Mouse events
function handleMouseOver(event) {
    event.target.style.transform = "scale(1.1)";
    console.log("Mouse over:", event.target.alt);
}

function handleMouseLeave(event) {
    event.target.style.transform = "scale(1)";
    console.log("Mouse leave:", event.target.alt);
}

// Keyboard focus events
function handleFocus(event) {
    event.target.style.border = "3px solid blue";
    console.log("Focus on:", event.target.alt);
}

function handleBlur(event) {
    event.target.style.border = "2px solid transparent";
    console.log("Blur on:", event.target.alt);
}

// Add tabindex to all figures
function addTabIndex() {
    const figures = document.querySelectorAll("#gallery figure");
    for (let i = 0; i < figures.length; i++) {
        figures[i].setAttribute("tabindex", "0"); // allow keyboard focus
        console.log("Tabindex added to figure", i + 1);
    }
}

// Attach all events
images.forEach(img => {
    img.addEventListener("mouseover", handleMouseOver);
    img.addEventListener("mouseleave", handleMouseLeave);
    img.addEventListener("focus", handleFocus);
    img.addEventListener("blur", handleBlur);
});

// Run addTabIndex when page loads
window.onload = addTabIndex;
