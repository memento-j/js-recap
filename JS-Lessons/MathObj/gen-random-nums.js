//math.random generates random decimal between 0 and 1
console.log(Math.random());
//random number (0 to 1) * 10, then the floor of that to round to an integer, then add 1 so 0 is not included (1-10)
console.log(Math.floor(Math.random() * 10) + 1);

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomNum(3, 7));
