"use strict";

const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=30897f96fe766360e7adf673c4678619&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=30897f96fe766360e7adf673c4678619&page=1&query="';

const form = document.querySelector("#form");
const search = document.querySelector("#search");

async function getMovies(url) {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== "") {
        getMovies(SEARCH_API + searchTerm);
        search.value = "";
    } else {
        window.location.reload();
    }
});

getMovies(API_URL);
