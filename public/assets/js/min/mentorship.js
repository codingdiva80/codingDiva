class Mentorship {

    constructor(user){
        this.user = user;
        this.testing = true;
    }

    getPosts(){
        return {};
    }

    renderPosts(div){
        if(!div){
            throw "You shouldn't call this method without a div id";
        }
        let html = '';
        let posts = (this.testing) ? mock_getPosts() : this.getPosts();
        posts.forEach(post => {
            let img = (post.type === 'mentor') ? 'mentor.png' : 'requestor.png';
            html+=`<div class='mentorship-post'>
                    <p><img src='/assets/images/icons/${img}' class='icon-mentor' /></p>
                    <p><span>Username:</span><span>${post.username}</span></p>
                    <p><span>Date:</span><span>${post.date}</span></p>
                    <p><span>Location:</span><span>${post.location}</span></p>
                    <p><span>${post.message}</p>
                   </div>
            `;
        });
        let oDiv = document.getElementById(div);
        oDiv.innerHTML = html;
    }

    /* post form will be inserted after the div in the argument */
    showPostForm(div){
        
        
    }

}

function mock_getPosts(){
    let posts = [
        {
            id: 1000,
            date: '2018-03-01',
            username: 'Luna',
            location: 'San Francisco',
            message: `Hello divas, I am an experinced web developer. I mainly work with front-end technologies but have some experince with node and mongo. I am mainly free in the evenings for an hour or so. I would like to help if you have any questions about anything tech related!`,
            type: 'mentor'
        },
        {
            id: 1001,
            date: '2018-03-05',
            username: 'Kate',
            location: 'San Francisco',
            message: `hello friends. I am having the hardest time with React js. I just started learning it and can't wrap my head around props and state. If anybody could walk me through that, that would be great! I am flexible with my schedule. Just let me know when it's convenient for you. Thanks so much!`,
            type: 'requestor'
        },
        {
            id: 1002,
            date: '2018-02-18',
            username: 'Jane',
            location: 'San Francisco',
            message: `Hey guys, I am working on a data scraping project and I am stuck on the mongo database. If anybody could look at my code tonight or tomorrow morning, that would be super helpful! Thanks in advance!`,
            type: 'requestor'
        },
        {
            id: 1003,
            date: '2018-01-29',
            username: 'Ann',
            location: 'San Francisco',
            message: `Hello people if you need any help getting ready for technical interviews, I am here to help.`,
            type: 'mentor'
        },
        {
            id: 1000,
            date: '2018-03-30',
            username: 'Mary',
            location: 'San Leandro',
            message: `Hello people if you need any help getting ready for technical interviews, I am here to help.`,
            type: 'requestor'
        },
    ];
    return posts;
}