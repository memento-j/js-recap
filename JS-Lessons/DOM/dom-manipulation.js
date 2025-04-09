/* Document Object Model (D.O.M.)
tree-like structure that represents the html document*/

//Selection elements in the DOM
//getElementById or getElementByClass
//can do get elementS also
function changeText() {
    //gets element in the document by id (kind of like selenium!) and changes its text content
    document.getElementById("main-heading").textContent = "Changing this with the click of a button :)"
};

//stores the all the elements with "descrption"
// class name in a collection which can be iterated through
const paragraphs = document.getElementsByClassName("description");
console.log(paragraphs[1].textContent);

//get all of a certain tag
const buttons = document.getElementsByTagName("button");
//outputs click me!
console.log(buttons[0].textContent);

//Query Selectors
//kind of like a css selector. gets the first find going from top to bottom,
// so the first paragraph will be selected
const firstParagraph = document.querySelector(".description");
console.log(firstParagraph.textContent);

//saves all matches to a nodelist
const allParagraphs = document.querySelectorAll(".description");
console.log(allParagraphs);

//can use foreach with the nodelist created to go through each paragraph saved
allParagraphs.forEach(paragraph => console.log(paragraph.textContent))

//modifying element
const heading = document.getElementById("main-heading");
//heading.textContent = "Something different as the heading"


//can change the actual html WITHIN that selected element 
// (hence function name .innerHTML). the tag of the selected
//element itself is not changed from this
//goes from <h1 id="main-heading">Welcome to JS</h1>
// to <h1 id="main-heading"><span style=color:red>styled</span>heading</h1>
heading.innerHTML = "<span style=color:red>styled</span>heading";

//can also change style of the selecteed element (changes the H1 only not the span inside it
// if the span already has a color)
heading.style.textAlign = "center";
heading.style.color = "lightgrey";

//creating, adding, and removing elements

// creates a p tag, changes textcontent, 
// then appends to paragraph to the document body
const newParagraph = document.createElement("p");
newParagraph.textContent = "New parapgrah made";
document.body.appendChild(newParagraph);

// can also removeChild using event listener, then applying a function
document.querySelector("button").addEventListener("click", () => {
    document.body.removeChild(newParagraph);
});


//can also add classes to elements and remove classes from elements

//selects first element from top-bottom with decription2 classname
//then adds highlight class to the list of classes the element has
const para = document.querySelector(".description2");
para.classList.add("highlight")

//removing class
document.querySelector("button").addEventListener("click", () => para.classList.remove("highlight"));

//modifying attributes
const link = document.createElement("a");
//sets href attribute to a site
link.setAttribute("href", "https://google.com");
//remember target to blank opens a new tab
link.setAttribute("target", "_blank");
link.textContent = "Visit google oh em gee";
document.body.appendChild(link);