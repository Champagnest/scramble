// Assignment code here
var password=document.getElementById("password");
var number =[1,2,3,4,5,6,7,8,9]
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var specialchar = "*()%^&%$#@!|/\."
var enter;


function genPassword() {
  //ask for users input
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    //validates user input
    enter = parseInt(prompt("You must choose between 8 and 128"));
  } else {
    //prompts after user input validated
    window.confirm("use special characters?")
  }
}
for (var i = 0, n = charset.length; i < length; ++i) {
  randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
 console.log(randomPassword)
}
return randomPassword;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = genPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);