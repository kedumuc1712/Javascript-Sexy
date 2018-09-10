var person = {
    firstName: "Penelope",
    lastName: "Barrymore",

    showFullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}

person.showFullName(); // Penelope Barrymore

var anotherPerson = {
    firstName: "Rohit",
    lastName: "Khan"
};

person.showFullName.apply(anotherPerson); // Rohit Khan