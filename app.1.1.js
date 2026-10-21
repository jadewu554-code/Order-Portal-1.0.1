/* // Rapid Response Bot // */

const btnFirst = document.querySelector(".main__button-1-1");
const btnsecond = document.querySelector(".main__button-1-2");
const btnthird = document.querySelector(".main__button-1-3");
const btnfourth = document.querySelector(".main__button-1-4");

const rcInput = document.querySelector(".main__input-1-0")
const respondCnt = document.querySelector(".main__div-1-3-response");

btnFirst.addEventListener("click", () => {
rcInput.value = "Who is X-Ray? And what is her part in our group?"
});

btnsecond.addEventListener("click", () => {
  rcInput.value = "What is the mission or occupation of this group?" 
});

btnthird.addEventListener("click", () => {
rcInput.value = "What is this site all about?"
});

btnfourth.addEventListener("click", () => {
  rcInput.value = "What is the order? And who are we?"
})

  const p = document.createElement("p")
  respondCnt.appendChild(p)
  p.id = "check-in"

function respondFun(response) {
  p.style.fontSize = `${0.8}em`

  p.classList.remove("active")

  setTimeout(() => {
    p.classList.add("active")
     p.innerText = `${response}`
  }, 150)  
};

document.addEventListener("keydown", (e) => {
  const inputValue = rcInput.value.trim();
  if(e.key === "Enter") {
    if(inputValue === "Who is X-Ray? And what is her part in our group?") {
  respondFun("An indispensable mother like member of our team who specializes in development, UI/UX design,  cybersecurity and and neural networks.")
}

  else if(inputValue === "What is the mission or occupation of this group?") {
  respondFun("We are a software development and design group focused on web technologies and artificial intelligence and cybersecurity. Our mission is to build responsibly, uphold human dignity in digital spaces, and stand against illegal and harmful activities online.")
}

else if(inputValue === "What is this site all about?") {
  respondFun("This site is part of the “Order” project created for our group members and serves as a portal designed for X-Ray. The visual design incorporates fictional and artistic elements featured within the site used for internal usage only.")
}

else if(inputValue === "What is the order? And who are we?") {
  respondFun("The “Order” project is a system individually designed for our members to introduce each member and to make communication more accessible and efficient for both our group and its members. This website is a part of that project. Our group operates in the fields of software development, design, artificial intelligence, and cybersecurity.")
}

else if(inputValue === "Hello" || inputValue === "hello" ) {
  respondFun("Hello, This is so good to see you in there! (You found a secret answer. You are so cool!).")

  }
}})

/* // 1v // */