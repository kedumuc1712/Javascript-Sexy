var clientData = {
    id: 094545,
    fullName: "Not Set",
    // setUserName is a method on the clientData object
    setUserName: function(firstName, lastName) {
        this.fullName = firstName + " " + lastName;
    }
}

function getUserInput(firstName, lastName, callback) {
    callback(firstName, lastName);
}

getUserInput("Barack", "Obama", clientData.setUserName);
console.log(clientData.fullName); // Not Set
console.log(window.fullName); // Brack Obama

// use call or apply function to fix
function getUserInputFix(firstName, lastName, callback, callbackObj) {
    callback.apply(callbackObj, [firstName, lastName]);
}

getUserInputFix("Barack", "Obama", clientData.setUserName, clientData);
console.log(clientData.fullName); // Brack Obama