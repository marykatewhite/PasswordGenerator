
function randomPasswordLength() {
    return  (Math.floor(Math.random() * 120) + 8);
}

function generate() {


var characters = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
// var password = 
// i think this will go somewhere who knows!
var passwordLength = randomPasswordLength();

var password = '';

for(var i = 0; i < passwordLength; i++){

    var charAt = (Math.floor(Math.random() * characters.length))
    password = password + characters[charAt]

}

return password;
}


var div = document.getElementById('password');

div.innerHTML += generate();