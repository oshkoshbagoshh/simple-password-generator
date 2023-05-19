/* 

=====================
  PSEUDOCODE
====================

Step 1 - ask for the length of a password using a  prompt, then save it to a variable

  //prompt
  // save it to a variable


Step 2.  - check the length provided by the user is between 8 - 128
  

Step 3 - prompt the user which criteia they would like to include: lowercase, uppercase, specialchar, num

Step 4 - validate the user selected at least one prompt by confirming for uppercase, lowercase, numbers, special char
then save it to a variable

Step 5 - Create the combined array using the push method

   //Combine the confirmed arrays
  / / create an array for uppercase letters, lowercase letters...
  //create a new array variable to have a new password with the length provided by the user, that includes the types the user selected

Step 5 - randomly select an item from the combined array 
  // use the math floor function
  // push it to the new password array and step up until we get the length of the user input


********************************************/



// # START



// Set character sets
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ['!', '#', '$', '%', '&', '@', '%', '&', '|', '^', '_'];
var userCharacterSet = [];

// Get password length from user
var passwordLength = parseInt(prompt("Enter a number between 8 and 128"));

// Validate password length
if (passwordLength >= 8 && passwordLength <= 128) {
  // Prompt user for character set preferences
  var isUpperCase = confirm("Include uppercase letters?");
  var isLowerCase = confirm("Include lowercase letters?");
  var isNumSet = confirm("Include numbers?");
  var isSpecialChar = confirm("Include special characters?");

  // Validate that the user selected at least one character set
  if (isUpperCase || isLowerCase || isNumSet || isSpecialChar) {
    // Combine selected character sets into userCharacterSet
    if (isUpperCase) {
      userCharacterSet = userCharacterSet.concat(uppercaseLetters);
    }
    if (isLowerCase) {
      userCharacterSet = userCharacterSet.concat(lowercaseLetters);
    }
    if (isNumSet) {
      userCharacterSet = userCharacterSet.concat(numSet);
    }
    if (isSpecialChar) {
      userCharacterSet = userCharacterSet.concat(specialChar);
    }

    // Generate the password
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * userCharacterSet.length);
      password += userCharacterSet[randomIndex];
    }

    console.log("Generated password:", password);
  } else {
    console.log("Please select at least one character set.");
  }
} else {
  console.log("Please enter a number between 8 and 128.");
}



// // Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); // from the text area 

  passwordText.value = password;
  console.log(passwordText.textContent);

};
// log to the console


// // // Assignment Code
var generateBtn = document.querySelector("#generate");


// // // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn.addEventListener("click", writePassword));

function generatePassword(params) {
  return "pasword";
  
  
};

 console.log("end of the program");





// Write password to the #password input
function writePassword() {
    // alert("working")
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      console.log(passwordText);

var readOnlyChange = document.getElementById("password").readonly = false;
      passwordText.value = password;
    }    function generatePassword() {
      return("hello")
      function myFunction() {}

     udpatePassword = document.getElementById("aria-label").textContent = password;
     document.getElementsByClassName("password")[0].appendChild(password);
     // need to change options of textarea to not be readonly

      
    };

writePassword()

//alert user what their password is
alert(password)

// var readOnlyChange = document.getElementById("password").readonly = false;
document.getElementById("password").textContent = password;