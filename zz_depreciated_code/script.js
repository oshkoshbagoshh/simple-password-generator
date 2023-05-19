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


// Step 0 - clear the console on every refresh
console.clear();

// Step 1 - user will click the button to generate password 
var lowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; //// log to consoleog to the console
var uppercaseLetters = ['A','B','C',"D","E","F","G","H","I","J", "K", "L", "M", "N", "O", "P","Q","R","S","T","U","V","W","X","Y","Z"];
var num_set = [1,2,3,4,5,6,7,8,9,0];
var special_char = ['!', '#', "$", "%", "&", "@", "%","&", "|", "^", "_",];

var userCharacterSet = [];



// console.log(lowercaseLetters);
// console.log(uppercaseLetters);
// console.log(num_set);
// console.log(special_char);


// console.log("This is the combined set:"+lowercaseLetters + uppercaseLetters + num_set+ special_char);

var combined_set = (lowercaseLetters + uppercaseLetters + num_set + special_char);
console.log(" the length of the set is :" + combined_set.length);

//set password length with window prompt
var passwordLength = parseInt(window.prompt("enter a number between 8 and 128"));
console.log(passwordLength);

//number validation - between 8 and 128

if (passwordLength >= 8 && passwordLength <= 128) {

  // console.log("passwordLength");

  var isUpperCase = confirm("Would you like Upper Case?")
// console.log(isUpperCase);
  var isLowerCase = confirm("Would you like Lower Case?")
  // console.log(isLowerCase);
  var isNumSet = confirm("How about numbers?")
  // console.log(isNumSet);  
  var isSpecialChar = confirm("...and special characters??")
  // console.log(isSpecialChar);
}

//Validation 
if (isUpperCase || isLowerCase || isNumSet || isSpecialChar) {

  window.alert("the user selected at least one set)");
  // console.log("The user selected at least one set.");
}  

  // use concat to combinethe different sets

  if (isUpperCase) {
    userCharacterSet = userCharacterSet.concat(uppercaseLetters);
    // return(userCharacterSet2);

} else if (isLowerCase) {

    userCharacterSet = userCharacterSet.concat(lowercaseLetters);
    // return(userCharacterSet3);

} else if (isNumSet) {
  userCharacterSet = userCharacterSet.concat(num_set);

} else if (isSpecialChar) {
  userCharacterSet = userCharacterSet.concat(special_char);
};


console.log(userCharacterSet);


//select random characters from the userCharacterset

// function lengthValidation () {

//   for (var i = 0;i<passwordLength;i++) {

//     var randomCharacter = userCharacterSet[Math.floor(Math.random() * userCharacterSet.length)];
  

//   return randomCharacter;
//     console.log(randomCharacter); 
//   };


// }  else if  {
//     console.log("Please pick at least 1 character set");
//     generatePassword();
//   }
// } 
// }else {
// //   alert("Please enter a number between 8 and 128")
//   generatePassword();


//   generatePassword()


// // Generate the password
// var password = "";
// for (var i = 0;i < passwordLength;i++) {

//   var randomIndex = Math.floor(Math.random() * userCharacterSet.length);
//   password += userCharacterSet[randomIndex];

// }


// console.log("Generated password: ", password);

// } else {
//   console.log("Please select at least one character set.");
// } else {
//   console.log("please enter a number between 8 and 128");
// }



// // for (var i = 0;i<passwordLength;i++) {

// //   var randomCharacter = userCharacterSet[Math.floor(Math.random() * userCharacterSet.length)];

// //   console.log(randomCharacter); 
// // }


// // // Assignment Code
// var generateBtn = document.querySelector("#generate");


// // console.log(generateBtn);
// // // log to the console




// // // Write password to the #password input
// function writePassword() {
  
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password"); // from the text area 

//   passwordText.value = password;
//   console.log(passwordText.textContent);

// };
// // log to the console


// // // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// console.log(generateBtn.addEventListener("click", writePassword));

// function generatePassword(params) {
//   return "pasword";
  
  
// }

//  console.log("end of the program");




// var password = "";
//     for (var i = 0; i < passwordLength; i++) {
//       var randomIndex = Math.floor(Math.random() * userCharacterSet.length);
//       password += userCharacterSet[randomIndex];
//     }

//     console.log("Generated password:", password);
//   } else {
//     console.log("Please select at least one character set.");
//   }
// } else {
//   console.log("Please enter a number between 8 and 128.");
// }