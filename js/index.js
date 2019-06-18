// Your code goes here

// #1 - Header changes to yellow on click 

let funBus = document.querySelector("h2");

function changeColor()
{funBus.style.color = "yellow";}

funBus.addEventListener("click", changeColor);

// #2 Header text changes on mouseover 

function changeText()
{funBus.textContent = "MORE FUN THAN AN UBER, CHEAPER THAN A LIMO"}

funBus.addEventListener("mouseover", changeText);

// #3 Magic School bus image appears on double click 

let busImage = document.querySelector(".intro img")

function changeImage()
{busImage.src = "http://www.govst.edu/uploadedImages/About/Center_for_Performing_Arts/Arts_and_Education/School_Performances/Magic_School_Bus_767x340.jpg"};

busImage.addEventListener("dblclick", changeImage);

// #4 Header paragraph text changes on keydown

let headerText = document.querySelector(".intro p")

function editParagraph()
{headerText.textContent = "This bus was the most fun out of all the busses. And Ive been on a lot of busses - Kevin Malone"}

headerText.addEventListener("keydown", editParagraph);

// #5 Change header text on wheel 

let headerText2 = document.querySelector(".text-content h2")

function lebronJames ()
{headerText2.textContent = "LeBron James took this bad boy to every home game when he was in Miami."}

headerText2.addEventListener("wheel", lebronJames)

// #6 Change second image to LeBron James on a bus on load



