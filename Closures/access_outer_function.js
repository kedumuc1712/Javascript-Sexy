function celebrityName(firstName) {
    var nameIntro = "This celebrity is ";

    function lastName(theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    
    return lastName;
}

var mjName = celebrityName("Micheal");
mjName("Jackson"); // This celebrity is Michael Jackson