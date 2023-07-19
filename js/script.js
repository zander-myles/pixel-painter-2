const body = document.querySelector("body");
const easelButton = document.querySelector(".easel-button");
const easel = document.querySelector(".easel");
const grid = document.querySelector(".grid");
const gridSizeInput = document.querySelector(".grid-size-input");
const newGridButton = document.querySelector(".new-grid-button");
const newColorButton = document.querySelector(".new-color-button");
const colorsContainer = document.querySelector(".colors-container");
const colorPicker = document.querySelector(".color-picker");
const savedColor = document.querySelectorAll(".new-color");
const darkThemeCard = document.querySelector(".card-dark");
const lightThemeCard = document.querySelector(".card-light");
const seafoamThemeCard = document.querySelector(".card-seafoam");
const terracottaThemeCard = document.querySelector(".card-terracotta");
const defaultThemeCard = document.querySelector(".card-default");
const rainbowButton = document.querySelector(".rainbow-button");
const grayscaleButton = document.querySelector(".grayscale-button");
const reactiveButton = document.querySelector(".reactive-button");

let paintColor = colorPicker.value;

darkThemeCard.addEventListener("click", () => {
    body.className = "dark";
})

lightThemeCard.addEventListener("click", () => {
    body.className = "light";
})

seafoamThemeCard.addEventListener("click", () => {
    body.className = "seafoam";
})

terracottaThemeCard.addEventListener("click", () => {
    body.className = "terracotta";
})

defaultThemeCard.addEventListener("click", () => {
    body.className = "";
})


colorPicker.addEventListener("change", () => {
    let colorValue = colorPicker.value;
    paintColor = colorValue;
    let newColor = document.createElement("div");
    newColor.className = "new-color";
    newColor.style.backgroundColor = colorValue;
    newColor.addEventListener("click", () => {
        paintColor = newColor.style.backgroundColor;
    })
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
                pixel.style.backgroundColor = paintColor;
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