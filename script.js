// // // Assignment Code
  var generateBtn = document.querySelector("#generate"); 
  var charLength;
// // var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// // var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

// // var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// // var specialCharacters = ['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','`','{','|','}','~']



// // Write password to the #password input
// function writePassword() { 
//   var password = generatePassword(); 
//   var passwordText = document.querySelector("#password"); 

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword); 



// generateBtn = document.getElementById("#generate");



function promptLength() {
charLength = prompt("How many characters do you want in your password? Pick between 8-128");
if (charLength < 8 || charLength > 128) {
    alert("Your pick must be between 8 and 128")
    promptLength();
}
}
promptLength();


generateBtn.addEventListener("click", function(event)  {
  console.log(event)
  let passwordLength = charLength;
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_";
  let password = "";

  for (i = 0;i < passwordLength;i++){
      password = password + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length - 1)));

  }

   document.getElementById("password").value = password;
  return;
});












//////////////////// This was a different attemept //////////////////// 

// function generatePassword() {
//   var playGame = prompt("Do you want to play a game? (Y/N)")
// if (playGame === true) {
//   var lowCriteria = prompt("Do you want lowercase in password (Y/N)")
// }
// var lowerCasePrompt = prompt("Do you want lower case letters in your password? (Y/N)")
// if (lowerCasePrompt===true)

// }



// function getPassword() {
//   var chars = "abcdefghij";
//   var passwordLength = 16;
//   var password = "";
  
//   for (var i=0; i<password.length; i++) {
//     var randomNumber = Math.floor(Math.randoma() * chars.length);
//     password += chars.substring(randomNumber,randomNumber + 1);
//   }
//     document.getElementById("password").value = password
//   }





// var passwordArray = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!#$%&'()*+,-./:;<=>?@[]\^_`{|}~"];
// var arrayLength = passwordArray.length;
// for (var i = 0; i < arrayLength; i++) {
//     console.log(passwordArray[i]);
//     //Do something
// }



