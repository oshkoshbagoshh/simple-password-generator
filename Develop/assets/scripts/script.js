/* 

=====================
  PSEUDOCODE
====================



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // alert("working")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generate password(){
  return "hello"
}
 

//ask for the length of a password
  //prompt
  //save it to a variable
//check the length provided by the user is a number and in between 8 and 128
  
//confirm: 4 for uppercase, lowercase, numbers, and special characters
  // save it to a variable
//check if one of the  uppercase or lowercase or num or sp char is there
   //Combine the confirmed arrays
// create an array for uppercase letters, lowercase letters...
//create an array variable to have a new password with the length provided by the user. 
[]
//random item from the combined array and push it to new password array and do this 
step up to the length of user input.

************************/



// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
