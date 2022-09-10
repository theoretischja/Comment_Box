
//WIP - Check whether the comment exceeds a character count of 140 characters using Javascript
//WIP - Display the number of characters as the user types (e.g. 87/140)
//Give user feedback with custom styling on the comment box, when the user exceeds the character limit (e.g. with a coloured border)
//DONE - Show the comment on the page when submitted

//create function that shows user input on page when submitted; create a variable for the userinput
//seems to work BUT when logging userInput.length it is =0. Why?

//Do these variables outside functions need to be called in some way in the HTML to work?
let userInput = document.getElementById("comment").value;
let chars = userInput.length;

function displayComment() {
  let userInput = document.getElementById("comment").value;
  document.getElementById("showComment").innerHTML = 'Your comment says: ' + userInput;
}

//function that displays number of chars as the user types (e.g. 87/140)
//WORKS except: input length is 0. Yet input prints in displayComment.

function charCount() {
  let chars = userInput.length;
  //while loop here?
  document.getElementById("charCount").innerHTML = 'Character count: ' + chars + '/140.';
}

//create function that checks whether the comment exceeds 140 chars
//this MIGHT work once chars actually gets the input length (see function above)
function charExceed() {
  if (chars > 140) {
    document.getElementById("charExceed").innerHTML = 'You have exceeded the character count limit of 140 characters.';
  }
}


  //function that checks if input exceeds 140 chars, and if so, enacts special CSS styling of box
//function charExceed() {
 //if  >//(chars > 140) {
  // //enact CSS styling of box
  //}
//}
