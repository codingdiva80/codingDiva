class User {

    constructor(){
        this.username = null;
        this.email = null;
        this.loggedin = false;
    }

    set(){
        this.username = localStorage.getItem('username');
        this.email = localStorage.getItem('email');
        this.loggedin = localStorage.getItem('loggedin');
    }

    storeLogin(data){
        localStorage.setItem('email', data.email);
        localStorage.setItem('password', data.password);
        localStorage.setItem('username', data.username);
        localStorage.setItem('loggedin', true);
        data.loggedin = true;
    }

    checkLoginStatus(){
        if(localStorage.getItem("loggedin")){
            this.set();
            return true;
        }
        return false;
    }

    static logout(){
        localStorage.removeItem("loggedin");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        setTimeout(()=>{
            document.location.href="/";
        },500);
    }

    /* Interface stuff */
    static updateNav(){
        let oNav = document.getElementById('nav-user');
        let oAnchor = oNav.getElementsByTagName("a")[0];
        let user = new User();
        if(user.checkLoginStatus()){
            oAnchor.setAttribute("href", "/member/info");
            oAnchor.innerHTML = "MY ACCOUNT";
            let oLi = document.createElement("li");
            oLi.innerHTML = `<a href='/member/logout'>LOGOUT</a>`;
            oNav.parentNode.appendChild(oLi);
        }
        else{
            oAnchor.setAttribute("href", "/member/signup");
            oAnchor.innerHTML = "SIGN UP/LOGIN";
        }
    }
    
}
