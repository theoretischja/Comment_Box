
//Check whether the comment exceeds a character count of 140 characters using Javascript
// - works
//Display the number of characters as the user types (e.g. 87/140)
// - works
//Give user feedback with custom styling on the comment box, when the user exceeds the character limit (e.g. with a coloured border)
// - works
//Show the comment on the page when submitted alongside the author’s name
// - works
//Allow the user to submit additional comments, while previous comments remain visible
//- not working yet (need to get input fields to clear after first input, and find way to print additional comments)


let char = document.getElementById("comment");
let comment = document.getElementById("comment");
let showComment = document.getElementById("showComment");
let charCount = document.getElementById("charCount");
let charExceed = document.getElementById("charExceed");
let submitButton = document.getElementById("submit");
let userName = document.getElementById("name");
let showUserName = document.getElementById("showUserName");

function charCounting() {
  if (char.value.length > 140) {
    charExceed.innerHTML = 'You have exceeded the word count.'
    comment.style.border = '5px dotted red';
  } else {
    charExceed.innerHTML = 'Keep typing...';
    comment.style.border = '2px solid black';
  }
};

function showCharCount() {
  charCount.innerHTML = 'Character count: ' + char.value.length + '/140';
};

function submitComment(e) {
  showUserName.innerHTML = 'Your name: ' + userName.value;
  showComment.innerHTML = 'Your comment: ' + comment.value;
  e.preventDefault();
};

comment.addEventListener('input', charCounting);
comment.addEventListener('input', showCharCount);
submitButton.addEventListener('click', submitComment);
