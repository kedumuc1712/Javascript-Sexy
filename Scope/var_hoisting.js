function showName() {
    console.log("First Name: " + name);
    var name = "Ford";
    console.log("Last Name: " + name);
}

showName();
// First Name : undefined
// Last Name: Ford

function showName() {
    var name;
    name = "Ford";
    console.log("Last Name: " + name);
}