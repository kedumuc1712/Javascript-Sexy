function celebrityID() {
    var celebrityID = 999;

    return {
        getID: function() {
            return celebrityID;
        },
        setID: function(theNewID) {
            celebrityID = theNewID;
        }
    }
}

var mjID = celebrityID();
mjID.getID(); // 999
mjID.setID(567);
mjID.getID(); // 567