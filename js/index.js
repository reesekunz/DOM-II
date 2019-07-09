// #1 Nav links change to red on mouseover

let navLinks = document.querySelectorAll(".nav-link");
function changeLink(link, color) {
  link.style.color = `${color}`;
}

navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    changeLink(link, "darkred");
  });

  link.addEventListener("mouseleave", () => {
    changeLink(link, "black");
  });
});

// #2 Each header increases in size on mouseover

let allHeaders = document.querySelectorAll(".headerclass");

function changeSize(header, fontSize) {
  header.style.fontSize = `${fontSize}`;
}

allHeaders.forEach(header => {
  header.addEventListener("mouseover", () => {
    changeSize(header, "4rem");
  });

  header.addEventListener("mouseleave", () => {
    changeSize(header, "3rem");
  });
});

// #3 Each header font turns cursive on click 

function changeFont(header, fontFamily) {
  header.style.fontFamily = `${fontFamily}`;
}

allHeaders.forEach(header => {
  header.addEventListener("click", () => {
    changeFont(header, "cursive");
  });
});

allHeaders.forEach(header => {
    header.addEventListener("dblclick", () => {
      changeFont(header, "Times New Roman");
    });
  });

// #4 Fun Bus logo text changes on copy

let funBusLogo = document.querySelector(".logo-heading");

function changeText ()
{funBusLogo.textContent = "Don't plagiarize!!"}

funBusLogo.addEventListener("copy", changeText);


// #5 Top header text changes on mouseover 



let welcomeHeader = document.querySelector("h2");


function changeHeaderText(){
    welcomeHeader.textContent = "More fun than an Uber, cheaper than a limo";
  }

  function changeHeaderTextBack(){
    welcomeHeader.textContent = "Welcome to fun Bus!";
  }


  welcomeHeader.addEventListener("mouseover", changeHeaderText);

  welcomeHeader.addEventListener("mouseleave", changeHeaderTextBack);

  // #6 Magic School bus image appears on double click
  
let busImage = document.querySelector(".intro img");

function changeImage()
{busImage.src = "http://www.govst.edu/uploadedImages/About/Center_for_Performing_Arts/Arts_and_Education/School_Performances/Magic_School_Bus_767x340.jpg"};

busImage.addEventListener("dblclick", changeImage);

// #7 Each paragraph text changes on paste 

let paragraphs = document.querySelectorAll("p");
function changeP(paragraph, text) {
 paragraph.textContent = `${text}`;
}

paragraphs.forEach(paragraph => {
 paragraph.addEventListener("paste", () => {
   changeP(paragraph, "Dude get your own content");
 });

});

// #8 Change button background colors on mouseover

let buttons = document.querySelectorAll(".btn");
function changeButton(button, color) {
 button.style.backgroundColor = `${color}`;
}

buttons.forEach(button => {
 button.addEventListener("mouseover", () => {
   changeButton(button, "yellow");
 });

   button.addEventListener("mouseleave", () => {
   changeButton(button, "black");
 })
  
});

// #9 Change second image to LeBron James on a bus on scroll

let image2 = document.querySelector(".img-content img");

console.log(image2);

function lebronJamesBus ()
{image2.src = "https://cavsnation.com/wp-content/uploads/2014/08/lebron-paul-bus.jpg"};

window.addEventListener("scroll", lebronJamesBus);

// #10 






// End of Refactoring












// Nesting nav link with event propagation

let navLink1 = document.querySelector(".nav-link");
let navBar1 = document.querySelector(".nav");

console.log(navLink1);
console.log(navBar1);

navLink1.addEventListener("click", e => {
  console.log("nav link 1 clicked");
  e.stopPropagation();
});

// Navigation prevent default

let navBar = document.querySelector("header nav");

console.log(navBar);

navBar.addEventListener("click", event => {
  event.preventDefault();
  console.log("Clicked!");
});
