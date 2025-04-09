// global student var
let students = []

//adds student to object array
function addStudent(name, grade) {
    //creates object to be added to students array
    students.push({
        name,
        grade
    });
}

//removes student
function removeStudent(name) {
    //finds index of the student name
    //goes through each student and if the student name equals the name being searched,
    //  the index is found and saved to the var
    let index = students.findIndex(student => student.name === name);
    //find index returns -1 when index isnt found
    if (index === -1) {
        console.log(`${name} not found in student list`);
    }
    //removes the student found at the index
    else {
        students.splice(index, 1);
        console.log(`${name} was removed`);
    }
}

//filter students who scored above a certain grade
function filterByGrade(minGrade) {
    //remember filter gets specific elements that meet condition and creates a new array
    return students.filter(student => student.grade >= minGrade);
}

//map student data into formatted list
function formatStudentsList() {
    return students.map(student => `${student.name} - Grade: ${student.grade}`);
}

addStudent("James", 92);
addStudent("Sam", 85);
addStudent("Dylan", 71);
addStudent("Ian", 64);
console.log(formatStudentsList());
console.log(filterByGrade(75));