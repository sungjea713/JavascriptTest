var socket = null;

function myOnClick()
{
    //alert("hi");
    socket.emit("msg", {comment: $('#user').val()});
    $('#user').val('');
}

$(document).ready(function() {
    socket = io.connect('http://' + document.domain + ':' + location.port);
    socket.on('rectMsg', function(data){
        console.log(data.comment)
        $('#chat').append(data.comment);
    });
});