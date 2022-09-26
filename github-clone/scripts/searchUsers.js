async function getUsers(search) {
    try {
        let respone = await fetch(`https://api.github.com/search/users?q=${search}`);
        let data = await respone.json();
        return data.items;
    } catch(err) {
        console.log(err);
    }
}

async function appendUsers(data, location) {
    location.textContent = "";
    data.forEach(({login, avatar_url, html_url}) => {
        let img = document.createElement("img");
        img.src = avatar_url;
        let a = document.createElement("a");
        a.href = html_url;
        a.setAttribute("target", "_blank");
        a.textContent = login;
        let div = document.createElement("div");
        div.setAttribute("class", "display-flex");
        div.append(img, a);
        location.append(div);
    });
}

export {getUsers, appendUsers}