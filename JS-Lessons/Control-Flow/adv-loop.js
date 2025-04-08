let names = ["James", "Samantha", "Charles", "Bryan"]

/* breaks out into a callback function
runs the function for each element in the array (function argument is the name of each invdividual element) */
names.forEach(function(name) {
    console.log(name);
});

// for of, used for arrays and iterables
for (let name of names) {
    console.log(name)

}

// for in, same as above, but used for objects (key, value pairs)
const person = {
    firstName: "Johnson",
    age: 25,
    country: "USA"
};

for (const key in person) {
    console.log(key + ": " + person[key]);
}