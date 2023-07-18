const easelButton = document.querySelector(".easel-button");
const easel = document.querySelector(".easel");
const grid = document.querySelector(".grid");
const gridSizeInput = document.querySelector(".grid-size-input");
const newGridButton = document.querySelector(".new-grid-button");

newGridButton.addEventListener("click", () => {
    let numOnSide = gridSizeInput.value;
    createGrid(numOnSide);
})

function createGrid(numOnSide) {
    let pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.remove();
    })
    let total = numOnSide ** 2;
    let dimension = 800 / numOnSide - 2;
    for (let i=0; i<total; i++) {
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.width = `${dimension}px`;
        pixel.style.height = `${dimension}px`;
        grid.appendChild(pixel);
    }
}

easelButton.addEventListener("click", () => {
    if (!easel.style.translate) {
        easel.style.translate = "0";
    } else {
        easel.style.translate = "";
    }
})