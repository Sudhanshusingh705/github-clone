    import {getRepos, appendRepos} from './searchRepos.js';
    import {getUsers, appendUsers} from './searchUsers.js';
    import navbar from '../components/navbar.js';

    document.querySelector("#navbar").innerHTML = navbar();

    var input = document.querySelector("#search-input");
    var searchResults = document.querySelector("#search-results");
    var bgImg = document.querySelector("#bg-img");
    input.addEventListener("keyup", searchInput);
    document.querySelector("#search-repo").addEventListener("click", searchRepos);
    document.querySelector("#search-user").addEventListener("click", searchUsers);

    function searchInput(event) {
        if(input.value == "") {
            document.querySelector(".dropdown-content").style.display = "none";
        } else {
            document.querySelector(".dropdown-content").style.display = "block";
            document.querySelector("#search-repo").textContent = `Search "${input.value}" in Repositories`;
            document.querySelector("#search-user").textContent = `Search "${input.value}" in Users`;
        }
        if(event.key === "Enter") {
            searchRepos();
        }
    }

    async function searchRepos() {
        bgImg.style.display = "none";
        searchResults.textContent = "Loading repos..";
        let search = input.value;
        input.value = "";
        document.querySelector(".dropdown-content").style.display = "none";
        let response = await getRepos(search);
        appendRepos(response, searchResults);
    }

    async function searchUsers() {
        bgImg.style.display = "none";
        searchResults.textContent = "Loading users..";
        let search = input.value;
        input.value = "";
        document.querySelector(".dropdown-content").style.display = "none";
        let response = await getUsers(search);
        appendUsers(response, searchResults);
    }