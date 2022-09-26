import {appendRepos} from './searchRepos.js';

var searchResults = document.querySelector("#search-results");
var bgImg = document.querySelector("#bg-img");

searchResults.textContent = "Loading..";
bgImg.style.display = "none";

async function loadRepos() {
    try {
        let response = await fetch("https://api.github.com/repositories");
        let data = await response.json();
        appendRepos(data, searchResults);
    } catch(err) {
        console.log(err);
    }
}

loadRepos();