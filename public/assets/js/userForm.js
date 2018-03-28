class UserForm {

    /* user is a user class type */
    constructor(user){
        this.user = user;
        this.setFormError();
        this.initForms();
        this.modal;
    }

    setFormError(){
        this.formError = {
            message : "",
            oFormEntity : null
        };
    }

    initForms(){
        let oSignup = document.getElementById("signup");
        let oLogin = document.getElementById("login");
        if(oSignup){
            oSignup.onclick = () => {
                if(this.verifyNewUser()){
                    this.submitNewUser();
                }
                else{
                    this.errorHandler();
                }
            }
        }
        if(oLogin){
            oLogin.onclick = () => {
                if(this.verifyLogin()){
                    this.submitLogin();
                }
                else{
                    this.errorHandler();
                }
            }
        }
    }

    /* attempting to login, checking against the database */
    submitLogin(){
        this.modal = new Modal();
        this.modal.showWait = true;
        this.modal.createCoverMessage("Checking login");
        let formData = {
            email: document.getElementById("login_email").value,
            password: document.getElementById("login_password").value
        }
        let url = "/member/login";
        fetch(url, {
            method: "post",
            headers: {
                'Accept': 'application/json, text/plain, text/html, */*',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(formData)
        }).then((res) => {
            return res.json();
        }).then((data) => {
            if(data.error){
                this.modal.close();
                this.formError.oFormEntity = document.getElementById("login_email");
                this.formError.message = "Email/password combination incorrect";
                this.errorHandler();
            }
            else{
                this.modal.updateMessage("Logged in, redirecting you to the homepage");
                this.user.storeLogin(formData);
                setTimeout(()=>{
                    let location = UI.getLastLink();
                    document.location.href=location;
                },1000);
            }
        });
    }

    /* be sure to include assets/js/modal.js 
       be sure to include assets/js/user.js
    */
    submitNewUser(){
        this.modal = new Modal();
        this.modal.showWait = true;
        this.modal.createCoverMessage("Submitting your information");
        let formData = {
            email: document.getElementById("signup_email").value,
            username: document.getElementById("signup_username").value,
            password: document.getElementById("signup_pass").value
        };
        
        let url = ("/member/newsignup");
        fetch(url, {
            method: "post",
            headers: {
                'Accept': 'application/json, text/plain, text/html, */*',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(formData)
        }).then((res) => {
            return res.json();
        }).then((data) => {
            if(data.error && data.error === "email exists"){
                this.modal.close();
                this.formError.oFormEntity = document.getElementById("signup_email");
                this.formError.message = "This email already exists in our system";
                this.errorHandler();
            }
            else{
                this.modal.updateMessage("User added, logging you in...");
                this.user.storeLogin(formData);
                setTimeout(()=>{
                    document.location.href="/";
                },1000);
            }
        });
    }

    verifyNewUser(){
        this.setFormError();
        this.unsetErrors();
        let o_signupUsername = document.getElementById("signup_username");
        let o_signupEmail = document.getElementById("signup_email");
        let o_signupPass = document.getElementById("signup_pass");
        let o_signupPass2 = document.getElementById("signup_pass2");
        if(o_signupUsername.value === ""){
            this.formError.message = "Missing username";
            this.formError.oFormEntity = o_signupUsername;
            return false;
        }
        if(o_signupUsername.value.length < 5){
            this.formError.message = "Username must be at least 5 characters long";
            this.formError.oFormEntity = o_signupUsername;
            return false;
        }
        if(o_signupEmail.value === ""){
            this.formError.message = "Missing email";
            this.formError.oFormEntity = o_signupEmail;
            return false;
        }
        if(o_signupEmail.value.length < 5){
            this.formError.message = "Email must be at least 5 characters long";
            this.formError.oFormEntity = o_signupEmail;
            return false;
        }
        if(o_signupPass.value === ""){
            this.formError.message = "Missing password";
            this.formError.oFormEntity = o_signupPass;
            return false;
        }
        if(o_signupPass2.value === ""){
            this.formError.message = "Missing password confirm";
            this.formError.oFormEntity = o_signupPass2;
            return false;
        }
        
        if(o_signupPass.value.length < 5){
            this.formError.message = "Password must be at least 5 characters long";
            this.formError.oFormEntity = o_signupPass;
            return false;
        }
        if(o_signupPass2.value !== o_signupPass.value){
            this.formError.message = "Passwords do not match";
            this.formError.oFormEntity = o_signupPass2;
            return false;
        }
        return true;
    }

    verifyLogin(){
        this.setFormError();
        this.unsetErrors();
        let o_loginEmail = document.getElementById('login_email');
        let o_loginPassword = document.getElementById('login_password');
        if(o_loginEmail.value === ""){
            this.formError.message = "Login is blank";
            this.formError.oFormEntity = o_loginEmail;
            return false;
        }
        if(o_loginEmail.value.length < 5 || o_loginEmail.value.indexOf("@")===-1){
            this.formError.message = "Not a valid email address";
            this.formError.oFormEntity = o_loginEmail;
            return false;
        }
        if(o_loginPassword.value === ""){
            this.formError.message = "Password cannot be left blank";
            this.formError.oFormEntity = o_loginPassword;
            return false;
        }
        if(o_loginPassword.value.length < 5){
            this.formError.message = "Password must be at least 5 characters";
            this.formError.oFormEntity = o_loginPassword;
            return false;
        }
        return true;
    }

    errorHandler(){
        
        let oElement = this.formError.oFormEntity;
        let oDiv = document.createElement("div");
        oDiv.style.width="200px";
        oDiv.style.padding = "5px";
        oDiv.style.textAlign = "right";
        oDiv.style.color = "red";
        oElement.parentNode.insertBefore(oDiv, oElement.parentNode.childNodes[0]);
        oDiv.innerHTML = this.formError.message;
        oDiv.id = "error-msg";
        oElement.classList.add("form-error");
    }

    unsetErrors(){
        let oDiv = document.getElementById("error-msg");
        if(oDiv){
            oDiv.parentNode.removeChild(oDiv);
        }
        let oFormEntity = document.querySelector(".form-error");
        if(oFormEntity){
            oFormEntity.classList.remove("form-error");
        }
        
    }

    

}