var clientData = {
    id: 09454,
    fullName: "Not Set",

    setUserName: function(firstName, lastName) {
        this.fullName = firstName + " " + lastName;
    }
}

function getUserInput(firstName, lastName, callback, callbackObj) {
    callback.apply(callbackObj, [firstName, lastName]);
}

getUserInput("Micheal", "Ballack", clientData.setUserName, clientData);
console.log(clientData.fullName); // Micheal Ballack