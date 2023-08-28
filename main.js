// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButton = document.getElementsByClassName("like-glyph")
const buttonArray = Array.from(likeButton);
const errorMessage = document.getElementById("modal")
const likedButton = document.getElementsByClassName("activated-heart")
const likedArray = Array.from(likedButton)

buttonArray.forEach(element => {
  element.addEventListener("click", () => {
    mimicServerCall()
  .then(resp => {if(element.className === "like-glyph"){
    console.log(resp)
    element.className = "activated-heart";
  }else if(element.className === "activated-heart"){
    element.className = "like-glyph";
  }}
  )
  .catch(error => {if(isRandomFailure = true){
    errorMessage.className = "newClass";
    errorMessage.innerHTML = error;
    setTimeout(removeError, 3000);
  }}
  )
  })
});


function removeError(){
  errorMessage.className = "hidden";
  errorMessage.innerHTML = "";
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}