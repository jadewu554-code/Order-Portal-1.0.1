 /* // MODAL // */
 const modalElement = document.querySelector(".main__modal-1-0");
 const modalMozaic = document.querySelector(".main__modal__mozaic-1-0");
 const clsBtn = document.querySelector(".main__modal-1-0-btn-1-0");
 const innerCursorElement = document.querySelector(".main__div-1-5__inner-cursor")
 const outerCursorElement = document.querySelector(".main__div-1-5__outer-cursor")

const articleOne = document.querySelector(".header__a-1-0")
const articleWrapOne = document.querySelector(".header__div-1-2")

const articleTwo = document.querySelector(".header__a-1-1")
const articleWrapTwo = document.querySelector(".header__div-1-3")

const articleThree = document.querySelector(".header__a-1-2")
const articleWrapThree = document.querySelector(".header__div-1-4")

const articleFour = document.querySelector(".header__a-1-3")
const articleWrapFour = document.querySelector(".header__div-1-5")

 window.addEventListener("DOMContentLoaded", () => {
  const isSeen = localStorage.getItem("modalShown")
  
  
  if(isSeen === null) {
    modalElement.classList.remove("off")
    modalMozaic.classList.remove("off")
    localStorage.setItem("modalShown", "true")
  }

   else{ 
   modalElement.classList.add("off")
   modalMozaic.classList.add("off")
}
 });

 clsBtn.addEventListener("click", () => {
 modalElement.classList.add("off")
 modalMozaic.classList.add("off")
 })
 
 /* // SD // */
 
 const vElement = document.querySelector(".main__video-1-0");
 const btnElement = document.querySelector(".main__btn-img-1-3");

 function btnFn() {
if(btnElement.getAttribute("src") === "Resource-Files-1-0/Icon-1.0/pause-icon.png") {
       btnElement.setAttribute("src", "Resource-Files-1-0/Icon-1.0/start-icon.png")
   }
   else{btnElement.setAttribute("src", "Resource-Files-1-0/Icon-1.0/pause-icon.png")}
  }

 document.addEventListener("keydown", (e) => {
  if(e.key === "A" || e.key === "a") {
   vElement.muted = !vElement.muted
   vElement.play()
   btnFn()
  } 

});

  btnElement.addEventListener("click", () => {
   vElement.muted = !vElement.muted
   vElement.play()
    btnFn()
  })

 /* // MENU // */

 const mnElement = document.querySelector(".main__card-1-0");
 const mnBtn = document.querySelector(".main__button-1-0");

 mnBtn.addEventListener("click", () => {
mnElement.classList.toggle("active")
 });


 /* // CURSOR // */
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

function eventMouse(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;

  innerCursorElement.style.transform =
    `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
}

function animate() {
  cursorX += (mouseX - cursorX) * 0.15;
  cursorY += (mouseY - cursorY) * 0.15;

  outerCursorElement.style.transform =
    `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;

  requestAnimationFrame(animate);
}

document.addEventListener("mousemove", eventMouse);
requestAnimationFrame(animate);


/* // Article Shading // */

articleWrapOne.addEventListener("mouseover", () => {
  articleOne.style.color = "#000"
  articleOne.style.fontWeight = 350
}) 

articleWrapOne.addEventListener("mouseout", () => {
  articleOne.style.color = "#fff"
  articleOne.style.fontWeight = 250
})

articleWrapTwo.addEventListener("mouseover", () => {
  articleTwo.style.color = "#000"
  articleTwo.style.fontWeight = 350
})

articleWrapTwo.addEventListener("mouseout", () => {
  articleTwo.style.color = "#fff"
  articleTwo.style.fontWeight = 250
})

articleWrapThree.addEventListener("mouseover", () => {
  articleThree.style.color = "#000"
  articleThree.style.fontWeight = 350
})

articleWrapThree.addEventListener("mouseout", () => {
  articleThree.style.color = "#fff"
  articleThree.style.fontWeight = 250
})

articleWrapFour.addEventListener("mouseover", () => {
  articleFour.style.color = "#000"
  articleFour.style.fontWeight = 350
})

articleWrapFour.addEventListener("mouseout", () => {
  articleFour.style.color = "#fff"
  articleFour.style.fontWeight = 250
})

 /* // 1.1v // */