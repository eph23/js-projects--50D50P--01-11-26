"use strict";

const smallCups = document.querySelectorAll(".cup-small");
const liters = document.querySelector("#liters");
const percentage = document.querySelector("#percentage");
const remained = document.querySelector("#remained");

function highlightCups(cupIndex) {
    if (
        smallCups[cupIndex].classList.contains("full") &&
        !smallCups[cupIndex].nextElementSibling.classList.contains("full")
    ) {
        cupIndex--;
    }

    smallCups.forEach((cup, index) => {
        if (index <= cupIndex) {
            cup.classList.add("full");
        } else {
            cup.classList.remove("full");
        }
    });
}

smallCups.forEach((cup, cupIndex) => {
    cup.addEventListener("click", () => {
        highlightCups(cupIndex);
    });
});
