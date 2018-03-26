class UI {

    renderMainNav() {
        let loggedInNav= `
            <nav id="navbar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Mentorship</a></li>
                    <li><a href="#">Job Board</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="/member/account">My Account</a></li>
                    <li><a href="/member/logout">Logout</a></li>
                </ul>
            </nav>
        `;
        let notLoggedInNav= `
            <nav id="navbar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Mentorship</a></li>
                    <li><a href="#">Job Board</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="/member/signup">Signup/Login</a></li>
                </ul>
            </nav>
        ` ;
        let nav = (User.getUserInfo()) ? loggedInNav : notLoggedInNav;
        let oDiv = document.getElementById('main-header');
        if(oDiv){ oDiv.innerHTML = nav; }
    }

}
