// Your code goes here

// Refactor 
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
 })
  
});


// #2 Each header increases in size on mouseover 

let allHeaders = document.querySelectorAll(".headerclass");

function changeSize(header, fontSize) {
 header.style.fontSize = `${fontSize}`;
}

allHeaders.forEach(header=> {
 header.addEventListener("mouseover", () => {
   changeSize(header, "4rem");
 });

   header.addEventListener("mouseleave", () => {
   changeSize(header, "3rem");
 })
  
});

// #3 Each header font turns cursive on click 

function changeFont(header, fontFamily) {
    header.style.fontFamily = `${fontFamily}`;
   }
   
   allHeaders.forEach(header=> {
    header.addEventListener("click", () => {
      changeFont(header, "cursive");
    });
   
     
   });


      

// End of Refactoring 


footerText.addEventListener = ("focus", footerTextChange);

// Nesting nav link with event propagation 

let navLink1 = document.querySelector(".nav-link");
let navBar1 = document.querySelector(".nav");

console.log(navLink1);
console.log(navBar1);


navLink1.addEventListener("click", (e) =>
{console.log("nav link 1 clicked")
e.stopPropagation();
})

// Navigation prevent default 

let navBar = document.querySelector('header nav');

console.log(navBar);

navBar.addEventListener('click', event =>
{event.preventDefault()
console.log('Clicked!')
} ); 

