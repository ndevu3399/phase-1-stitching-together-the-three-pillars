/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {}
document.addEventListener("DOMContentLoaded", () => {
    const articleHearts = document.querySelectorAll(".like-glyph");
  
    function mimicServerCall(url = "", config = {}) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() < 0.2) {
            reject("Random server error. Try again.");
          } else {
            resolve("Pretend remote server notified of action!");
          }
        }, 300);
      });
    }
  
    articleHearts.forEach((heart) => {
      heart.addEventListener("click", () => {
        mimicServerCall()
          .then(() => {
            if (heart.classList.contains("activated-heart")) {
              heart.classList.remove("activated-heart");
            } else {
              heart.classList.add("activated-heart");
            }
          })
          .catch((error) => {
            alert(error);
          });
      });
    });
  });