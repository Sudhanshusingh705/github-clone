async function getRepos(search) {
    try {
        let respone = await fetch(`https://api.github.com/search/repositories?q=${search}`);
        let data = await respone.json();
        return data.items;
    } catch(err) {
        console.log(err);
    }
}

async function appendRepos(data, location) {
    location.textContent = "";
    data.forEach(({full_name, description, html_url}) => {
        let a = document.createElement("a");
        a.href = html_url;
        a.setAttribute("target", "_blank");
        a.textContent = full_name;
        let p = document.createElement("p");
        p.textContent = description;
        let div = document.createElement("div");
        div.append(a, p);
        location.append(div);
    });
}

export {getRepos, appendRepos}