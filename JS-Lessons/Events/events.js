function sayHello() {
    alert("Hallo");
}

const btn = document.getElementById("btn");
//have to use the call back for sayHello as using the parenthesis to run the function
//makes it run when thee page loads
//btn.addEventListener("click", () => alert("Hallo from add event listner"));

//mouse hover
const text = document.getElementById("hover-text");
//hover = mouse over
//not hovering anymore = mouse out
text.addEventListener("mouseover", () => text.style.color = "red");
text.addEventListener("mouseout", () => text.style.color = "black");

//keyboard events (keyup, keydown)
const input = document.getElementById("textInput");
const display = document.getElementById("displayText");
//when key comes up (event is keyboard event) 
//everytime key is releaased input value is displayed
//binds the input to the display
input.addEventListener("keyup", (event) => 
    display.textContent = "You typed: " + event.target.value);

//detecting input change (on select selement)
const dropdown = document.getElementById("dropdown"),
    output = document.getElementById("output");

dropdown.addEventListener("change", () => output.textContent = "You selected " + dropdown.value)

//removing event listeners
//clicks once and shows the log, then it stops afteer that
function handleClick() {
    console.log("handle click");
    //removing event listener always has to be a function callback
    btn.removeEventListener("click", handleClick)
}

btn.addEventListener("click", handleClick);