
var generateEl = document.getElementById('generateButton')
generateEl.addEventListener('click', generate)


// var copyEl = document.getElementById('copyButton')
// getComputedStyle.addEventListener('click', )


var uppercase = document.getElementById("uppercase")
var lowercase = document.getElementById("lowercase")
var numerals = document.getElementById("numbers")
var special = document.getElementById("special")


function buildArray() {
    var characters = "";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var numerals = "1234567890";
    var special = "!@#$%^&*()_+";
    if (uppercase.checked===true) {
        characters += upperCase
    }
    if (lowercase.checked===true) {
        characters += lowerCase
    }
    if (numerals.checked===true) {
        characters += numerals
    }
    if (special.checked===true) {
        characters += special
    }
    return characters;
}


function generate() {
    var passwordLength = document.getElementById("slider").value

    var password = '';
    var characters = buildArray();

    for(var i = 0; i < passwordLength; i++){

        var charAt = (Math.floor(Math.random() * characters.length))
        password = password + characters[charAt]

    }
    var passwordBar = document.getElementById('password');
    passwordBar.textContent += password
}

var generateEl = document.getElementById('generateButton')
generateEl.addEventListener('click', generate)



document.getElementById("length").innerHTML = "Length: 25"

document.getElementById("slider").oninput = function() {
    if (document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1"
    }
}