$(document).ready(function() {
    $(".login").click(function(){
        const user = prompt("Gunakan Username untuk Login");
        document.getElementById("welcomemessage").innerHTML="Hello, " + user +"!";
    });
})