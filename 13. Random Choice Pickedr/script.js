"use strict";

const tagsEl = document.querySelector("#tags");
const textarea = document.querySelector("#textarea");
textarea.focus();

function createTags(input) {
    const tags = input
        .split(",")
        .filter((tag) => tag.trim() !== "")
        .map((tag) => tag.trim());
    tagsEl.innerHTML = "";

    tags.forEach((tag) => {
        const tagEl = document.createElement("span");
        tagEl.classList.add("tag");
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
}

textarea.addEventListener("keyup", (event) => {
    createTags(event.target.value);
});
