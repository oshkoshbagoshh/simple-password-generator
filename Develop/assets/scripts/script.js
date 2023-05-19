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
console.log(lowercaseLetters);
console.log(uppercaseLetters);
console.log(num_set);
console.log(special_char);


console.log("This is the combined set:"+lowercaseLetters + uppercaseLetters + num_set+ special_char);

var all_characters = (lowercaseLetters+ uppercaseLetters + num_set + special_char);
console.log(all_characters);

console.log(typeof all_characters);
console.log(all_characters.length);

var length_of_string = all_characters.length;
console.log(length_of_string);

// print the string indexes


// 142 total combined characters


// turn the strings into an array

// function password_sets_array () {
//   var password_st_array_ = (lowercaseLetters + uppercaseLetters + special_char + num_set);

//   console.log(password_st_array_);

//   var arraySet1 = password_set_1.split(",");// lower and uppercase
//   console.log(arraySet1);
  



var password_set_1 = lowercaseLetters + uppercaseLetters;
console.log(password_set_1);

var arraySet1 = password_set_1.split(",");// lower and uppercase
console.log(arraySet1);

// function clickTheButton () {
//   window.prompt ("Please press the button to generate a password.");

// }
// // Assignment Code
var generateBtn = document.querySelector("#generate");


// console.log(generateBtn);
// // log to the console




// // Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); // from the text area 

  passwordText.value = password;
  console.log(passwordText.textContent);

}
// log to the console


// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn.addEventListener("click", writePassword));

function generatePassword(params) {
  return "pasword";
  
  
}

 console.log("end of the program");




