const easelButton = document.querySelector(".easel-button");
const easel = document.querySelector(".easel");

easelButton.addEventListener("click", () => {
    if (!easel.style.translate) {
        easel.style.translate = "0";
    } else {
        easel.style.translate = "";
    }
})