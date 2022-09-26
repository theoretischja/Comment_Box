
//Check whether the comment exceeds a character count of 140 characters using Javascript
// - works, but deletions are also counted as characters
//Display the number of characters as the user types (e.g. 87/140)
// - works
//Give user feedback with custom styling on the comment box, when the user exceeds the character limit (e.g. with a coloured border)
// - works
//Show the comment on the page when submitted alongside the author’s name
// - works
//Allow the user to submit additional comments, while previous comments remain visible


let char = document.getElementById("comment").value.length;
let comment = document.getElementById("comment");
let showComment = document.getElementById("showComment");
let charCount = document.getElementById("charCount");
let charExceed = document.getElementById("charExceed");
let submitButton = document.getElementById("submit");
let userName = document.getElementById("name");
let showUserName = document.getElementById("showUserName");

function charCounting() {
  if (char > 8) {
    charExceed.innerHTML = 'You have exceeded the word count.'
    comment.style.border = '5px dotted red';
  } else {
    console.log('Goodbye!');
  }
  char++;
};

function showCharCount() {
  charCount.innerHTML = 'Character count: ' + char + '/140';
};

function submitComment(e) {
  e.preventDefault();
  showUserName.innerHTML = userName.value;
  showComment.innerHTML = comment.value;
};

//not in use at the moment
//function decrementCharCount() {
  //showComment.innerHTML = char--;
//}

comment.addEventListener('input', charCounting);
comment.addEventListener('input', showCharCount);
submitButton.addEventListener('click', submitComment);
