/* Modal should be included */
class MessagePost{

    renderPostButton(divId){
        let oButton = document.createElement("button");
        oButton.classList.add("submit");
        oButton.onclick = () => {
            if(!User.getUserInfo()){
                let modal = new Modal();
                modal.centered = true;
                modal.createCoverMessage("You must be logged in to post a message");
                let html = `
                    <span><a href='#' onclick="UI.clickSaveLink('/member/signup');">Login</a></span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span><a href='#' onclick='Modal.close()'>Close</a></span>
                `;
                modal.appendMessage(html,1000);
            }
            else{
                this.renderPostMessage();
            }
        }
        oButton.textContent = "Create a new post";
        document.getElementById(divId).appendChild(oButton);
    }

    renderPostMessage(){
        let html = `
            <div class='postmessage'>
                <div class='postmessage-left'>
                    <span>Need help?<span>
                    <p>
                        <textarea placeholder="Ex: Help! I don't understand react, I need a mentor"></textarea>
                    </p>
                </div>

                <div class='postmessage-right'>
                    <span>Mentor: Offer a message of mentorship</span>
                    <p>
                        <textarea placeholder="Ex: Hey, divas, if you need some help, I'm available most afternoons"></textarea>
                    </p>
                </div>
            </div>
        `;
        let modal = new Modal();
        modal.wide = true;
        modal.createCoverMessage(html);

        //add question button
        let oButton = document.createElement("button");
        oButton.classList.add("post-question-submit");
        oButton.textContent = "Submit question";
        document.querySelector(".postmessage-left").appendChild(oButton);
        oButton.onclick = () => {
            alert("asking for help");
        }
        oButton = document.createElement("button");
        oButton.classList.add("post-question-submit");
        oButton.textContent = "Cancel";
        document.querySelector(".postmessage-left").appendChild(oButton);
        oButton.onclick = () => {
            Modal.close();
        }

        //add help button
        oButton = document.createElement("button");
        oButton.classList.add("post-help-submit");
        oButton.textContent = "Submit help";
        document.querySelector(".postmessage-right").appendChild(oButton);
        oButton.onclick = () => {
            alert("providing help");
        }
        oButton = document.createElement("button");
        oButton.classList.add("post-question-submit");
        oButton.textContent = "Cancel";
        document.querySelector(".postmessage-right").appendChild(oButton);
        oButton.onclick = () => {
            Modal.close();
        }
    }

}

renderPostButton = (divId) => {
    let messagePost = new MessagePost();
    messagePost.renderPostButton(divId);
}