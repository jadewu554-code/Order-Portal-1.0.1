/* // Alerts // */

const txtBtn1 = document.querySelector(".header__a-1-0");
const txtBtn2 = document.querySelector(".header__a-1-1");
const ic1 = document.querySelector(".main__btn-img-1-1");
const ic2 = document.querySelector(".main__btn-img-1-2");

const mbModaltxt1 = document.querySelector(".main__modal-1-0__li-1-0");
const mbModaltxt2 = document.querySelector(".main__modal-1-0-h1-1-0")

txtBtn1.addEventListener("click", function(event) {
  event.preventDefault();
  alert("You can check to 'Q' button bellow for using the input and know about us.")
});


txtBtn2.addEventListener("click", function(event) {
  event.preventDefault();
  alert("You can contact with X-Ray due to Discord or you can send an e-mail to this adress: sptc402@gmail.com ")
});

ic1.addEventListener("click", function(event) {
  event.preventDefault();
  alert("X-Ray's Github not ready to indicate. You can check later ")
});

ic2.addEventListener("click", function(event) {
  event.preventDefault();
  alert("X-Ray's Instagram not ready to indicate. You can check later ")
});

if(window.innerWidth < 1024) {
 mbModaltxt1.innerText = "Sorry This site not available for mobile"
 mbModaltxt2.innerText = "Notification:"
 mbModaltxt1.style.listStyle = "none"
 mbModaltxt1.style.width = `${300}px`
}

/* // 1v // */

