"use strict";

const buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach((button) =>
    button.addEventListener("click", function (event) {
        button.parentNode.classList.toggle("active");
    }),
);
