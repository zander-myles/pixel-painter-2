const easelButton = document.querySelector(".easel-button");
const easel = document.querySelector(".easel");
const grid = document.querySelector(".grid");
const gridSizeInput = document.querySelector(".grid-size-input");
const newGridButton = document.querySelector(".new-grid-button");
const newColorButton = document.querySelector(".new-color-button");
const colorsContainer = document.querySelector(".colors-container");

newColorButton.addEventListener("click", () => {
    let newColor = document.createElement("div");
    newColor.className = "new-color";
    colorsContainer.appendChild(newColor);
})

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
        pixel.addEventListener("click", () => {
            if (!pixel.style.backgroundColor) {
                pixel.style.backgroundColor = "pink";
            } else {
                pixel.style.backgroundColor = "";
            }
        })
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

createGrid(16);