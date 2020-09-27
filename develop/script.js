// Defining the variables

var passLength = 0;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numbers = "1234567890";
var specialCharacter = "!#$%&'()*+,-./:;?@][^_`{|}~'<=>";
var passwordPool = "";
var userPassword = "";

// Function for selection prompts 

function clicked() {


  // Setting value for second button click without reloading website
  passwordPool = "";
  userPassword = "";

  while (!passwordPool) {

    alert("Passwords must contain at least lowercase, uppercase, special characters, and/or numbers.");

    var isLower = confirm("Do you want to use lower case letters?");
    var isUpper = confirm("Do you want to use upper case letters?");
    var isCharacter = confirm("Do you want to use special characters?");
    var isNumber = confirm("Do you want to use numbers?");

    if (isLower) {
      passwordPool += lowerCase;
    }
    if (isUpper) {
      passwordPool += upperCase;
    }
    if (isCharacter) {
      passwordPool += specialCharacter;
    }
    if (isNumber) {
      passwordPool += numbers;
    }
  }

  // Loop to make sure password is between 8-128 characters and a valid number

  while (isNaN(passLength) || (passLength < 8 || passLength > 128)) {
    var passLength = prompt("Enter the length of the password, must be between 8-128 ");
    if (isNaN(passLength)) {
      alert("You must enter a vaild number.");
    } else if (passLength < 8 || passLength > 128) {
      alert("You must enter a number between 8 and 128.");
    } else {
      setPassword(passLength);
      alert("Your password is: " + userPassword);
    }
  }

}

// Function to generate password from random characters chosen

function setPassword(pLength) {
  for (var i = 0; i < pLength; i++) {
    userPassword += passwordPool.charAt(Math.floor(Math.random() * passwordPool.length));
  }
  return userPassword;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);