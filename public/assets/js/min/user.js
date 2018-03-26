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

    static getUserInfo(){
        let user = new User();
        if(localStorage.getItem("loggedin")){
            user.set();
            return {
                username: this.username,
                email: this.email
            }
        }
        return false;
    }
    
}
