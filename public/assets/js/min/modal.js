class Modal {

    constructor(){
        this.showWait = false;
        this.centered = true;
        this.oMsg;
        this.wide = false;
    }

    createCover(){
        this.removeCover();
        let oDiv = document.createElement("div");
        oDiv.id = "fullCover";
        oDiv.style.height = document.body.scrollHeight + "px";
        document.body.appendChild(oDiv);
    }

    createCoverMessage(msg="", showClose=false){
        let width = (this.wide) ? 
                                 Math.floor(document.body.clientWidth * .8): 
                                 Math.floor(document.body.clientWidth * .5);
        this.createCover();
        let oDiv = document.createElement("div");
        oDiv.id = "fullCoverMsg";
        let left = Math.floor((document.body.clientWidth/2) - (width/2));
        oDiv.style.left = `${left}px`;
        oDiv.style.width = `${width}px`;
        let html = "";
        let style = "";
        
        if(this.centered){
            style = "text-align:center;";
        }
        if(this.showWait){
            html = `
                <div style='${style}'>
                    <div>
                        <span><i>please wait...</i></span>
                        <span><img src='/assets/images/icons/2.gif' class='img-wait' /></span>
                    </div>  
                    <div id='msg-area'>${msg}</div>
                </div>`;
        }
        else{
            html = `<div id='msg-area' style='${style}'>${msg}</div>`;
        }
        oDiv.innerHTML = html;
        document.body.appendChild(oDiv);
        if(showClose){
            oDiv.innerHTML += "<div class='close'><a href='#'>Close</a></div>";
        }
        this.oMsg = oDiv;
    }

    updateMessage(msg, time=0){
        let style = "";
        if(this.centered){
            style = "width:100%;text-align:center";
        }
        setTimeout(()=>{
            document.getElementById('msg-area').innerHTML = `<div style='${style}'>${msg}</div>`;
        }, time);
    }

    appendMessage(msg, time=0){
        let style = "";
        if(this.centered){
            style = "width:100%;text-align:center";
        }
        setTimeout(()=>{
            document.getElementById('msg-area').innerHTML += `<div style='${style}'>${msg}</div>`;
        }, time);
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

    //static close is an alias of removeCover
    static close(){
        let modal = new Modal();
        modal.removeCover();
    }

}