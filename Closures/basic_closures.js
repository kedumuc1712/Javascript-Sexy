function showName(firstName, lastName) {
    var nameIntro = "Your name is ";

    function makeFullName() {
        return nameIntro + firstName + " " + lastName;
    }
    
    return makeFullName();
}

showName("Le", "Cong"); // Your name is Le Cong