var user = {
    tournament: "The Masters",
    data: [
        {name: "T. Woods", age: 37},
        {name: "P. Mickelson", age: 43}
    ],

    clickHandler: function() {
        var theUserObj = this;
        this.data.forEach(function(person) {
            console.log (person.name + " is playing at " + this.tournament);
        });
    }
}

user.clickHandler(); // What is "this" referring to? [object Window]