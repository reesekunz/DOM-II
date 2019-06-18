// Your code goes here

// #1 - Header changes to yellow on click 

let funBus = document.querySelector("h2");

function changeColor()
{funBus.style.color = "yellow";}

funBus.addEventListener("click", changeColor);

//funBus.addEventListener("click", changeColor =>
//{changeColor.preventDefault()} ); 

// #2 Header text changes on mouseover

function changeText()
{funBus.textContent = "MORE FUN THAN AN UBER, CHEAPER THAN A LIMO";}

funBus.addEventListener("mouseover", changeText);

// #3 Magic School bus image appears on double click 

let busImage = document.querySelector(".intro img");

function changeImage()
{busImage.src = "http://www.govst.edu/uploadedImages/About/Center_for_Performing_Arts/Arts_and_Education/School_Performances/Magic_School_Bus_767x340.jpg"};

busImage.addEventListener("dblclick", changeImage);

// #4 Header paragraph text changes on keydown

let headerText = document.querySelector(".intro p");

function editParagraph()
{headerText.textContent = "This bus was the most fun out of all the busses. And Ive been on a lot of busses - Kevin Malone"};

headerText.addEventListener("keydown", editParagraph);

// #5 Change header text on wheel 

let headerText2 = document.querySelector(".text-content h2");

function lebronJames ()
{headerText2.textContent = "LeBron James took this bad boy to every home game when he was in Miami."};

headerText2.addEventListener("wheel", lebronJames);

// #6 Change second image to LeBron James on a bus on scroll 

let image2 = document.querySelector(".img-content img");

function lebronJamesBus ()
{image2.src = "https://cavsnation.com/wp-content/uploads/2014/08/lebron-paul-bus.jpg"};

image2.addEventListener("scroll", lebronJamesBus);

// #7 Change Fun Bus text on load 

let funBusNav = document.querySelector(".logo-heading")

function gusBus ()
{funBusNav.textContent = "Gus Bus!"};

funBusNav.addEventListener("load", gusBus);

// #8 Change paragraph color on select 

let paragraphColor = document.querySelector(".text-content p");

function paragraphColorChange()
{paragraphColor.style.color = "red";}

paragraphColor.addEventListener("select", paragraphColorChange);

// #9 Change font size on resize for every paragraph 

let paragraphFontSize = document.querySelectorAll("p");

function paragraphFontSizeChange ()
{paragraphFontSize.style.fontSize = "2.2rem";}

paragraphFontSize.addEventListener = ("resize", paragraphFontSizeChange);

// #10 Change footer text on focus 

let footerText = document.querySelector(".footer p");

function footerTextChange ()
{footerText.textContent = "You better get on that fun bus boi";}

footerText.addEventListener = ("focus", footerTextChange);

// Nesting nav link with event propagation 

let navLink1 = document.querySelector(".nav-link");
let navBar1 = document.querySelector(".nav");

//navBar1.addEventListener("click", (e) => {
//console.log("nav bar clicked";)
//});

navLink1.addEventListener("click", (e) =>
{console.log("nav link 1 clicked")
e.stopPropagation();
})

// Navigation prevent default 

let navBar = document.querySelector('header nav');

navBar.addEventListener('click', event =>
{event.preventDefault()
//console.log('Clicked!')
} ); 

