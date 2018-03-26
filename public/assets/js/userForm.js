class UserForm {

    constructor(){
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
                this.verifyLogin();
            }
        }
    }

    /* be sure to include assets/js/modal.js */
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
        console.log("Checking login");
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