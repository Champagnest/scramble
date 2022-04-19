// Assignment code here
var password=document.getElementById("password");
var number =['1','2','3','4','5','6','7','8','9']
// var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
//   "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  var lowercase = "abcdefghijklmnopqrstuvwxyz".split('')
  var specialchar = "*()%^&%$#@!|/?".split('')
var enter;
var passwordOptions = []
var passwordCharacters = []
function genPassword() {
 var passwordLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
console.log(passwordLength)

var passwordHasSpecialChar = confirm("Do you want to use special characters?");
console.log(passwordHasSpecialChar)

var passwordNumber = confirm("Do you want to use numbers?");
console.log(passwordNumber)

var passwordUpperCase = confirm("Do you want to use uppercase letters?");
console.log(passwordUpperCase)

var passwordLowerCase = confirm("Do you want to use lower case?");
console.log(passwordLowerCase)


if (passwordHasSpecialChar) {
passwordOptions = passwordOptions.concat(specialchar)

console.log(specialchar)
passwordCharacters = specialchar[Math.floor(Math.random()* specialchar.length)]

console.log(passwordCharacters)
}
if (passwordNumber) {
  passwordOptions = passwordOptions.concat(number)
  
  console.log(number)
  passwordCharacters = number[Math.floor(Math.random()* number.length)]
  
  console.log(passwordCharacters)
  }
  if (passwordUpperCase) {
    passwordOptions = passwordOptions.concat(uppercase)
    
    console.log(uppercase)
    passwordCharacters = uppercase[Math.floor(Math.random()* uppercase.length)]
    
    console.log(passwordCharacters)
    }
    if (passwordLowerCase) {
      passwordOptions = passwordOptions.concat(lowercase)
      
      console.log(lowercase)
      passwordCharacters = lowercase[Math.floor(Math.random()* lowercase.length)]
      
      console.log(passwordCharacters)
    }
    var results = []
    console.log(passwordOptions)
    for (var i = 0; i < passwordLength; ++i){
      results.push (passwordOptions[Math.floor(Math.random()* passwordOptions.length)])
    }
    console.log(results)
    return results.join('')
}
   










// function genPassword() {
//   //ask for users input
//   enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
//   if (!enter) {
//     alert("This needs a value");
//   } else if (enter < 8 || enter > 128) {
//     //validates user input
//     enter = parseInt(prompt("You must choose between 8 and 128"));
//   } else {
//     //prompts after user input validated
//     window.confirm("use special characters?")
//   }
//   console.log(enter)
//   randomPassword = null;
//   passwordCharacters = 
//   for (var i = 0, n = enter; i < length; ++i) {
//     randomPassword = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
//   } 
//     console.log(randomPassword)
  
//   return randomPassword;
// }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = genPassword();
  console.log(password)
  var passwordText = document.querySelector("#password");
console.log(passwordText)
  passwordText.innerHTML = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);