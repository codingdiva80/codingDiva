class Modal {

    constructor(){
        this.showWait = false;
        this.centered = true;
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
                    <div>${msg}</div>
                    <div id='update-msg'></div>
                    <div>
                        <span><i>please wait...</i></span>
                        <span><img src='/assets/images/icons/2.gif' class='img-wait' /></span>
                    </div>  
                </div>`;
        }
        else{
            html = msg;
        }
        oDiv.innerHTML = html;
        document.body.appendChild(oDiv);
        if(showClose){
            oDiv.innerHTML += "<div class='close'><a href='#'>Close</a></div>";
        }
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