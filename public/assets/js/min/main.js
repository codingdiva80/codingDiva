function getFormattedDate(daysFromNow) {
    if(!daysFromNow){ daysFromNow = -1; }
    $today = new Date();
    $yesterday = new Date($today);
    $yesterday.setDate($today.getDate() + daysFromNow);

    var $dd = $yesterday.getDate();
    var $mm = $yesterday.getMonth()+1; //January is 0!

    var $yyyy = $yesterday.getFullYear();
    if($dd<10){$dd='0'+$dd} if($mm<10){$mm='0'+$mm} $yesterday = $mm+'/'+$dd+'/'+$yyyy;
    return $yesterday;
}
// SLIDER
const panels = document.querySelectorAll('.panel');
function toggleOpen() {
    this.classList.toggle('open');
}
function toggleActive(e) {
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


// CHAT
$(function(){
    if(typeof(io) === undefined){
        return;
    }
    var socket = io.connect();
    var $messageForm = $('#messageForm');
    var $message = $('#message');
    var $chat = $('#chatWindow');
    var $usernameForm = $('#usernameForm');
    var $loginForm = $("#loginForm");
    var $users = $('#users');
    var $username = $('#username');
    var $password = $('#password');
    var $error = $('#error');

    $usernameForm.submit(function(e){
        e.preventDefault();
        socket.emit('new user', $username.val(), function(data){
            if(data){
                $('#namesWrapper').hide();
                $('#mainWrapper').show();
            } else {
            $error.html('Username is taken');
            }
        });
    });

    $loginForm.submit(function(e){
        e.preventDefault();
        var user = {
            username: $username.val(),
            password: $password.val()
        }
        socket.emit('login', user, function(data){
            if(data){
            $('#namesWrapper').hide();
            $('#mainWrapper').show();
            } else {
            $error.html("Login incorrect");
            }
        });
    });

    socket.on('usernames', function(data){
        var html = '';
        for(i = 0;i < data.length;i++){
            html += data[i] + '<br>';
        }
        $users.html(html);
    });

    $messageForm.submit(function(e){
        e.preventDefault();
        socket.emit('send message', $message.val());
        $message.val('');
    });

    socket.on('new message', function(data){
        $chat.append('<strong>'+data.user+'</strong>: '+data.msg+'<br>');
    });
});

// MAP
function initMap(){
    // Map options
    var options = {
        zoom:8,
        center:{lat:37.7749,lng:-122.4194}
    }
    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);
    // Listen for click on map
    google.maps.event.addListener(map, 'click', function(event){
        // Add marker
        addMarker({coords:event.latLng});
    });
    // Add marker
    var marker = new google.maps.Marker({
        position:{lat:42.4668,lng:-70.9495},
        map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });
    var infoWindow = new google.maps.InfoWindow({
        content:'<h1>Lynn MA</h1>'
    });
    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
    // Array of markers
    var markers = [
        {
        coords:{lat:42.4668,lng:-70.9495},
        iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content:'<h1>Lynn MA</h1>'
        },
        {
        coords:{lat:42.8584,lng:-70.9300},
        content:'<h1>Amesbury MA</h1>'
        },
        {
        coords:{lat:42.7762,lng:-71.0773}
        }
    ];
    // Loop through markers
    for(var i = 0;i < markers.length;i++){
        // Add marker
        addMarker(markers[i]);
    }
    // Add Marker Function
    function addMarker(props){
        var marker = new google.maps.Marker({
            position:props.coords,
            map:map,
            //icon:props.iconImage
        });
        // Check for customicon
        if(props.iconImage){
            // Set icon image
            marker.setIcon(props.iconImage);
        }
        // Check content
        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
            content:props.content
            });
            marker.addListener('click', function(){
                infoWindow.open(map, marker);
            });
        }
    }
}
