// push -> adds to end (why not just call it append why treat it like a stack? xd)
// pop -> deleted the end 
// shift -> shifts all values to the left by 1 and decrements the length by 1 (deleted first value in array)
// unshift -> adds an element at the start of the array
// splice(start-index, delete-count, replacement(s)) -> removes elemeents from array and adds new element in its place if necessary

//map transforms elements inside of an array, creates a new array by applying caallback function to each element

const nums = [1,2,3,4,5];
console.log("numbers =", nums);
//map (var to call each element => operation to be done to each element)
const doubled = nums.map(num => num * 2);
console.log(doubled);

//filter gets specific elements that meet condition and creates a new array
const evenNumbers = nums.filter(num => num % 2 === 0);
console.log(evenNumbers)

//object stores data as key,value pairs
let person = {
    name: "James",
    age: 25,
    country: "USA"
}
console.log(person)

person.city = "Washington D.C."
console.log(person)

//can delete key,value pair by deleting the key
delete person.city;
console.log(person)

//for in is used to iterate objects' key value pairs