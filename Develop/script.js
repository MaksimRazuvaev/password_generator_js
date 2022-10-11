// Assignment code here

// Declare variables
var password = "";
var passwordLenght = 8;
var isLowercase = true;
var isUppercase = true;
var isNumeric = true;
var isSpecCharac = true;
var isCharTypeSlected = false;
var charSet = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// staring function to get password's lenght 
function whatIsPasswordLenght() {
  let input = prompt("PLease enter lenght of your password \n no less then 8 and no more then 128");
  passwordLenght = input;
}

// confirm whether or not to include lowercase, uppercase, numeric, and/or special characters. Prepare charSet string for random Math function
function whatIsPasswordCharSet() {
  var needLowercase = confirm("Do you want to include lowercase");
  if (!needLowercase) {
    charSet = charSet.replace('abcdefghijklmnopqrstuvwxyz', '');
  }
  var needUpperCase = confirm("Do you want to include upercase"); 
  if (!needUpperCase) {
    charSet = charSet.replace('ABCDEFGHIJKLMNOPQRSTUVWXYZ', '');
  }
  var needNumeric = confirm("Do you want to include numeric");
  if (!needNumeric) {
    charSet = charSet.replace('0123456789', '');
  }
  var needSpecChar = confirm("Do you want to include special characters");
  if (!needSpecChar && charSet.length <= 10) {
    alert("You can't generate password without lowercase, uppercase, numeric, and special characters \n your password will be created with special characters only");
  }else if (!needSpecChar){
    charSet = charSet.replace('!@#$%^&*()', '');
  }
  return charSet;
}
//console.log(whatIsPasswordCharSet());

// generate password by using passwordLenght and charSet
function passwordGenerator() {
  var pass = '';
  for (let i = 1; i <= passwordLenght; i++) {
      var char = Math.floor(Math.random()* charSet.length + 1);
      pass += charSet.charAt(char)
  }
  return pass;
}
//console.log(generateP());



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click",  );
