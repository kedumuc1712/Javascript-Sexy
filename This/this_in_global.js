var firstName = "Peter";
lastName = "Ally";

function showFullName() {
    console.log(this.firstName + " " + this.lastName);
}

var person = {
    firstName: "Penelope",
    lastName: "Barrymore",

    showFullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}

showFullName(); // Peter Ally

// window is the object that all global variables and functions are defined on, hence:
window.showFullName(); // Peter Ally
person.showFullName(); // Penelope Barrymore