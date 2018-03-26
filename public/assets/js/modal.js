class Modal {

    constructor(){
        this.showWait = false;
        this.centered = true;
        this.oMsg;
    }

    createCover(){
        this.removeCover();
        let oDiv = document.createElement("div");
        oDiv.id = "fullCover";
        document.body.appendChild(oDiv);
    }

    createCoverMessage(msg="", showClose=false){
        this.createCover();
        let oDiv = document.createElement("div");
        oDiv.id = "fullCoverMsg";
        let html = "";
        let style = "";
        if(this.centered){
            style = "text-align:center";
        }
        if(this.showWait){
            html = `
                <div style=${style}>
                    <div>
                        <span><i>please wait...</i></span>
                        <span><img src='/assets/images/icons/2.gif' class='img-wait' /></span>
                    </div>  
                    <div id='msg-area'>${msg}</div>
                </div>`;
        }
        else{
            html = `<div id='msg-area'>${msg}</div>`;
        }
        oDiv.innerHTML = html;
        document.body.appendChild(oDiv);
        if(showClose){
            oDiv.innerHTML += "<div class='close'><a href='#'>Close</a></div>";
        }
        this.oMsg = oDiv;
    }

    updateMessage(msg){
        document.getElementById('msg-area').innerHTML = `<div>${msg}</div>`;
    }

    appendMessage(){
        document.getElementById('msg-area').innerHTML += `<div>${msg}</div>`;
    }

    removeCover(){
        let oDiv = document.getElementById('fullCover');
        if(oDiv){
            oDiv.parentNode.removeChild(oDiv);
        }
        let cDiv = document.getElementById('fullCoverMsg');
        if(cDiv){
            cDiv.parentNode.removeChild(cDiv);
        }
    }

    //close is an alias of removeCover
    close(){
        this.removeCover();
    }

}