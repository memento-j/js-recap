async function fetchData() {
    //gets the two elements being used in this function
    const loadingText = document.getElementById("loading");
    const dataText = document.getElementById("data");
    //show loading message here
    loadingText.style.display = "block";
    //incase it is run multiple times it resets the datatext text
    dataText.textContent = "";
    //Simulated api call
    try {
        const response = await new Promise((resolve, reject) => {
            //if resolve, set response to the resolve value and continue try block
            //if reject, go to catch block
            setTimeout(() => Math.random() > 0.5 ? resolve("Data loaded successfully") : reject()
            ,3000);
        });
        //remove loading text
        loadingText.style.display = "none";
        //then show the response data 
        dataText.textContent = response;
    } catch (error) {
        //loading text also goes away as the loaading is done
        loadingText.style.display = "none";
        //display the error
        dataText.textContent = "Error Loading data", error;
    } finally {
        //no matter what we want the loading display to be removed after the timeout,
        //so change it here
        loadingText.style.display = "none";
    }
}