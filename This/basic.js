var person = {
    firstName: "Penelope",
    lastName: "Barrymore",

    showFullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}

person.showFullName(); // Penelope Barrymore