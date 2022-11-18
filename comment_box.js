
let char = document.getElementById("comment");
let comment = document.getElementById("comment");
let userName = document.getElementById("name");
let email = document.getElementById("email");
let charCount = document.getElementById("charCount");
let charExceed = document.getElementById("charExceed");
let submitButton = document.getElementById("submit");


function charCounting() {
  if (char.value.length > 140) {
    charExceed.innerHTML = 'You have exceeded the word count!'
    comment.style.border = '5px dotted red';
  } else {
    charExceed.innerHTML = 'You are within the word count...';
    comment.style.border = '2px solid black';
  }
};

function showCharCount() {
  charCount.innerHTML = 'Character count: ' + char.value.length + '/140';
};

function submitComment(e) {
  e.preventDefault();
  const childName = document.createElement("cn");
  const childEmail = document.createElement("ce");
  const childComment = document.createElement("cc");
  childName.innerHTML = "Your name: " + userName.value + " ";
  childEmail.innerHTML = "Your email: " + email.value + " ";
  childComment.innerHTML = "Your comment: " + comment.value + " ";
  document.getElementById("parent").appendChild(childName);
  document.getElementById("parent").appendChild(childEmail);
  document.getElementById("parent").appendChild(childComment);
  document.getElementById("form").reset();
};

comment.addEventListener('input', charCounting);
comment.addEventListener('input', showCharCount);
submitButton.addEventListener('click', submitComment);
