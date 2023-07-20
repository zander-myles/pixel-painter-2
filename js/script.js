const body = document.querySelector("body");
const easelButton = document.querySelector(".easel-button");
const easel = document.querySelector(".easel");
const grid = document.querySelector(".grid");
const gridSizeInput = document.querySelector(".grid-size-input");
const gridSizeLabel = document.querySelector(".grid-size-label");
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

const grayscaleModeColors = ["#ebebeb", "#bebebe", "#686868", "#3d3d3d"];
const rainbowModeColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

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

rainbowButton.addEventListener("click", () => {
    if (!grayscaleButton.classList.contains("on")) {
        if (!rainbowButton.classList.contains("on")) {
            rainbowButton.textContent = "on";
        } else {
            rainbowButton.textContent = "off";
        }
        rainbowButton.classList.toggle("on");
    }
})

grayscaleButton.addEventListener("click", () => {
    if (!rainbowButton.classList.contains("on")) {
        if (!grayscaleButton.classList.contains("on")) {
            grayscaleButton.textContent = "on";
        } else {
            grayscaleButton.textContent = "off";
        }
        grayscaleButton.classList.toggle("on");
    }
})

reactiveButton.addEventListener("click", () => {
    if (!reactiveButton.classList.contains("on")) {
        reactiveButton.textContent = "on";
    } else {
        reactiveButton.textContent = "off";
        body.style.background = "var(--bg-body-color)";
    }
    reactiveButton.classList.toggle("on");
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
    if (reactiveButton.classList.contains("on")) {
        body.style.background = paintColor;
    }
})

gridSizeInput.addEventListener("change", () => {
    let numOnSide = gridSizeInput.value;
    gridSizeLabel.textContent = `x${numOnSide}`;
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
            if (grayscaleButton.classList.contains("on")) {
                paintColor = grayscaleModeColors[Math.floor(Math.random() * 4)];
            }
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
    if (!rainbowButton.classList.contains("on") && !grayscaleButton.classList.contains("on")) {
        if (!easel.style.translate) {
            easel.style.translate = "0";
        } else {
            easel.style.translate = "";
        }
    }
})

createGrid(16);