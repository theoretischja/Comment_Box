
//Check whether the comment exceeds a character count of 140 characters using Javascript
//Display the number of characters as the user types (e.g. 87/140)
//Give user feedback with custom styling on the comment box, when the user exceeds the character limit (e.g. with a coloured border)
//Show the comment on the page when submitted

//create a variable for the userinput - this currently gets the fixed value in index.html
let userInput = document.getElementById("comment").value;

//create function that shows user input on page - working
function displayComment() {
  document.getElementById('showComment').innerHTML = userInput;
}

displayComment();

//create function that checks whether the comment exceeds 140 chars - this works only when value="" in index.html
const charCount = (userInput) => {
  if (userInput > 1) {
    console.log('You have exceeded the character count limit of 140 characters.');
  }
}

//charCount();

//function that displays number of chars as the user types (e.g. 87/140)
//function iterate() {
  //for (let i=0; i < 140, i++;) {
  // return i;
  //}

  //function that checks if input exceeds 140 chars, and if so, enacts special CSS styling of box
//function charExceed() {
 //if  >//(html maxlength is reached) {
  // //enact CSS styling of box
  //}
//}
//create a function that shows the comment on the page when submitted
//function printComment() {
  //console.log(userInput);
//}

//printComment();