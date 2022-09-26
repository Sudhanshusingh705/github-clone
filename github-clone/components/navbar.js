function navbar() {

    return `<div>
    <a href="./"><img src="./images/logo.png" width="33px" height="33px" /></a>
    <div class="dropdown">
        <input type="text" id="search-input" placeholder="Search and press enter.." />
        <div class="dropdown-content">
            <div id="search-repo">Search "" in Repositories</div>
            <div id="search-user">Search "" in Users</div>
          </div>
    </div>
    <ul>
        <li><a href="./pull_requests.html">Pull Requests</a></li>
        <li><a href="./issues.html">Issues</a></li>
        <li><a href="./marketplace.html">Marketplace</a></li>
        <li><a href="./explore.html">Explore</a></li>
    </ul>
</div>
<div>
    <img src="./images/mypic-bg.png" width="32px" alt="">
</div>`;
}

export default navbar;