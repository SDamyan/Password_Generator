
let upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let numericChar = ["1","2","3","4","5","6","7","8","9","0"];
let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="];
let mixedChar = []
let password = ""

function generate(){

let charLength = prompt("Enter the amount of characters for your password between 8 - 128.");

if (charLength < 8) {
    alert("Please choose a number between 8-128.");
    return;
}
    else if (charLength > 128) {
        alert("Please choose a number between 8-128.");
        return;
    }

mixedChar = [];
let upperYes = confirm ("Would you like to use an uppercase letter in your password?");
if (upperYes) {
    mixedChar.push.apply(mixedChar,upperChar)
}

let lowerYes = confirm ("Would you like to use a lowercase letter in your password?");
if (lowerYes) {
    mixedChar.push.apply(mixedChar,lowerChar)
}

let numericYes = confirm("Would you like to use a number in your password?");
if (numericYes) {
    mixedChar.push.apply(mixedChar,numericChar)
}

let specialYes = confirm("Would you like to use a special character in your password?");
    if (specialYes) {
    mixedChar.push.apply(mixedChar,specialChar)
}



    for (let i = 0; i < charLength; i++) {
        // Randomly chooses a choice from the options array. 
        password = password + mixedChar[Math.floor(Math.random() * mixedChar.length)];    
    }

if (mixedChar.length === 0) {
    alert ("Please select at least one character group.");
}
else{


alert("Your password is: " + password)
document.getElementById("display").value = password;
}
}


 //fucntion to copy to clipboard
    function copyPassword() {
        document.getElementById("display").select();
        document.execCommand("Copy");
        alert("Password copied to clipboard");
    }
