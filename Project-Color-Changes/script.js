//instantiate vars for elements you want to change at the top
//at the start
const buttons = document.querySelectorAll(".color-btn");
const resetButton = document.getElementById("reset")

//for each button add an event listener to change the background color
// on click to the data color given to it on the html file
buttons.forEach(button => {
    button.addEventListener("click", () =>
        document.body.style.backgroundColor = button.getAttribute("data-color"));
});

//resets background color to default white
resetButton.addEventListener("click", () => 
    document.body.style.backgroundColor = "white");