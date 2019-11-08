
let upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let numericChar = ["1","2","3","4","5","6","7","8","9","0"];
let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="];
let mixedChar = []

let charLength = prompt("Enter the amount of characters for your password between 8 - 28.");

if (charLength < 8) {
    alert("Please choose a number between 8-128.");
}
    else if (charLength > 128) {
        alert("Please choose a number between 8-128.");
    }

let upperYes = confirm ("Would you like to use an uppercase letter in your password?");
if (upperYes) {
}

confirm("Would you like to use a lowercase letter in your password?");
confirm("Would you like to use a number in your password?");
confirm("Would you like to use a special character in your password?");


    for (let i = 0; i < charLength; i++) {
    // Randomly chooses a choice from the options array. 
    let mixedChar = mixedChar[Math.floor(Math.random() * mixedChar.length)];




alert("Your password is: " + )

}
















/*
//generate random password
function generate(){

    //set password length/complexity
    let complexity = document.getElementById("slider").value;

    //possible password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

}

   /* //set default length to 18
    document.getElementById("Length").innerHTML = "Length: 18";

    //function to set length based on slider position
    document.getElementById("slider").oninput = function() {

        if(document.getElementById ("slider").value > 0) {
            document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
        }
        else{
            document.getElementById("length").innnerHTML = "Length: 8";
        }
    }*/

    //fucntion to copy to clipboard
    function copyPassword() {
        document.getElementById("display").select();
        document.execCommand("Copy");
        alert("Password copied to clipboard");
    }