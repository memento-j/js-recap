//set task list and task input as global vars
const inputtedTask = document.getElementById("task-input");
const taskList = document.querySelector(".task-list");


//gets inputted task from user and displays list
function addTask() {
    let taskValue = inputtedTask.value.trim();
    //do nothing if there is nothing inputted
    if (taskValue === "") return;

    //empties the input field after saving the value to a var
    document.getElementById("task-input").value = ""

    //create list element
    const taskItem = document.createElement("li");
    taskItem.classList.add("task");
    taskItem.textContent = taskValue;
    
    //add click event to remove the task
    taskItem.addEventListener("click", () => taskList.removeChild(taskItem));

    //add list element to the task list
    taskList.appendChild(taskItem);
}