// Assignment code here


// Password generator with prompt and confirm messages
  function generatePassword() {
// staring prompt to get user input for password's lenght 
  let passwordLenght = prompt("Please enter lenght of your password \nno less then 8 and no more then 128");
  if(!passwordLenght) {
    passwordLenght = 8;
  } else if (passwordLenght > 128) {
    passwordLenght = 128;
  }
  else if (passwordLenght < 8) {
    passwordLenght = 8;
  }
// starting prompts to ask user whether or not to include lowercase, uppercase, numeric, and/or special characters. 
//Prepare charSet string for random Math function
  var charSet = "0123456789abcdefghijklmnopqrstuvwxyz!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
    charSet = charSet.replace('!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~', '');
  }
// generate password with Math.random function based on user input from passwordLendth and charSet option prompts.
  var pass = '';
  for (let i = 1; i <= passwordLenght; i++) {
      var char = Math.floor(Math.random() * charSet.length);
      pass += charSet.charAt(char)
  }
  return pass;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button. writePassword function is added without "()"
generateBtn.addEventListener("click", writePassword);