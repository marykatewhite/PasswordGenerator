var copyEl = document.getElementById('copyButton')

function generate() {
    var uppercase = document.getElementById("uppercase")
    var lowercase = document.getElementById("lowercase")
    var numbers = document.getElementById("numbers")
    var special = document.getElementById("special")
    var characters = "";


    function buildArray() {
        var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
        var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
        var numeralChars = "1234567890";
        var specialChars = "!@#$%^&*()_+";
        if (uppercase.checked===true) {
            characters += upperCaseChars
        }
        if (lowercase.checked===true) {
            characters += lowerCaseChars
        }
        if (numbers.checked===true) {
            characters += numeralChars
        }
        if (special.checked===true) {
            characters += specialChars
        }
        return characters;

    }


    var passwordLength = document.getElementById("slider").value;

    var passwordBar = document.getElementById('password');
    passwordBar.textContent = "";

    var password = '';
    var characters = buildArray();

    for(var i = 0; i < passwordLength; i++){

        var charAt = (Math.floor(Math.random() * characters.length))
        password = password + characters[charAt]

    }
    var passwordBar = document.getElementById('password');
    passwordBar.textContent += password;

}



var generateEl = document.getElementById('generateButton')
generateEl.addEventListener('click', generate)



document.getElementById("length").innerHTML = "Length: 68"

document.getElementById("slider").oninput = function() {
    if (document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1"
    }
}